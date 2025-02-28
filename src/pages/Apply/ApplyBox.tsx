import { useState, useEffect, ChangeEvent } from "react";
import { 
  useApplyQuestions, 
  useSaveApply, 
  useSubmitApply, 
  useLoadApply 
} from "@/hooks/useApply";
import { ApplyQuestion, ApplyAnswer, Answer, Track } from "@/models/apply";
import { filterQuestionsByTrack, sortQuestionsByPriority } from "@/utils/apply";
import ChoiceSelector from "./ChoiceSelector";
import PersonalInfo from "./PersonalInfo";

const defaultTrack: Track = Track.UNION;
type AnswerMap = Record<number, string | number[]>;

interface ApplyBoxProps {
  propStudentNumber: string;
  propPassword: string;
}

export default function ApplyBox({ propStudentNumber, propPassword }: ApplyBoxProps) {
  const { data: questionsData, loading: questionsLoading, error: questionsError } = useApplyQuestions();
  const { saveApply, loading: saveLoading, error: saveError } = useSaveApply();
  const { submitApply, loading: submitLoading, error: submitError } = useSubmitApply();
  const { loadApply, loading: loadLoading, error: loadError } = useLoadApply();

  const [studentNumber, setStudentNumber] = useState(propStudentNumber);
  const [password, setPassword] = useState(propPassword);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [loadedData, setLoadedData] = useState<ApplyAnswer | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<Track>(defaultTrack);

  // 트랙 선택 핸들러
  const handleTrackChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTrack = e.target.value as Track;
    setSelectedTrack(newTrack);
    setAnswers({});
  };

  // 답변 변경 핸들러
  const handleAnswerChange = (questionId: number, value: string | number[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // 질문 배열 처리: 트랙 필터링 후 priority 정렬
  const processedQuestions: ApplyQuestion[] = questionsData?.data
    ? sortQuestionsByPriority(filterQuestionsByTrack(questionsData.data, selectedTrack))
    : [];

  // Answer 배열로 변환 (processedQuestions에 해당하는 질문만 포함)
  const transformAnswers = (): Answer[] => {
    return processedQuestions.map((question) => {
      const answerValue = answers[question.questionId];
      if (question.type === "ESSAY") {
        return {
          questionId: question.questionId,
          content: answerValue as string,
        };
      } else if (question.type === "CHOICE") {
        return {
          questionId: question.questionId,
          choiceId: answerValue as number[],
        };
      } else {
        throw new Error(`지원서 변환 에러: 처리되지 않은 질문 타입 (${question.type})`);
      }
    });
  };

  useEffect(() => {
    if (studentNumber && password) { 
      loadApply({ studentNumber, password })
        .then((res) => {
          if (res.data) {
            setLoadedData(res.data);
            const answerMap: AnswerMap = {};
            // 답변 데이터도 타입에 맞게 보관
            res.data.answers.forEach((ans) => {
              answerMap[ans.questionId] =
                "choiceId" in ans ? (ans.choiceId ?? []) : (ans.content ?? "");
            });
            setAnswers(answerMap);
            setSelectedTrack(res.data.track);
          }
        })
        .catch((err) => {
          console.error("지원서 로드 에러:", err);
        });
    }
  // 여기에 loadApply 넣지 마세요... 무한 반복됩니다 ㅠㅠ
  }, [studentNumber, password]);

  const buildApplyData = (): ApplyAnswer => {
    if (loadedData) {
      return {
        ...loadedData,
        track: selectedTrack,
        answers: transformAnswers(),
      };
    }
    throw new Error("지원서 데이터 구성 실패: 로드된 데이터가 없습니다.");
  };

  const handleSave = async () => {
    try {
      const response = await saveApply(buildApplyData());
      console.log("임시저장 성공:", response);
    } catch (err) {
      console.error("임시저장 에러:", err);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await submitApply(buildApplyData());
      console.log("제출 성공:", response);
    } catch (err) {
      console.error("제출 에러:", err);
    }
  };

  // 로드 중 또는 에러 상태에 따른 처리
  if (loadLoading) return <div>지원서를 로딩중입니다...</div>;
  if (loadError) return <div>지원서 로드 에러: {loadError.message}</div>;
  if (questionsLoading) return <div>질문 데이터를 로딩중입니다...</div>;
  if (questionsError) return <div>질문 데이터를 로딩 에러: {questionsError.message}</div>;

  return (
    <div>
      <h1>지원서 작성</h1>
      <PersonalInfo
        studentNumber={studentNumber}
        password={password}
        name={loadedData?.name ?? ""}
        major={loadedData?.major ?? ""}
        email={loadedData?.email ?? ""}
        phoneNumber={loadedData?.phoneNumber ?? ""}
        onStudentNumberChange={setStudentNumber}
        onPasswordChange={setPassword}
        onNameChange={(value) => {
          if (loadedData) setLoadedData({ ...loadedData, name: value });
        }}
        onMajorChange={(value) => {
          if (loadedData) setLoadedData({ ...loadedData, major: value });
        }}
        onEmailChange={(value) => {
          if (loadedData) setLoadedData({ ...loadedData, email: value });
        }}
        onPhoneNumberChange={(value) => {
          if (loadedData) setLoadedData({ ...loadedData, phoneNumber: value });
        }}
      />
      <div>
        <label>
          트랙 선택:
          <select value={selectedTrack} onChange={handleTrackChange}>
            {Object.values(Track).map((track) => (
              <option key={track} value={track}>
                {track}
              </option>
            ))}
          </select>
        </label>
      </div>
      <hr />
      {processedQuestions.map((question, index) => (
        <div key={question.questionId} style={{ marginBottom: "1rem" }}>
          <p>
            {index + 1}번. {question.content}{" "}
            {question.isRequired && <span style={{ color: "red" }}>*</span>}
          </p>
          {question.type === "ESSAY" ? (
            <textarea
              maxLength={question.maxLength}
              value={
                typeof answers[question.questionId] === "string"
                  ? (answers[question.questionId] as string)
                  : ""
              }
              onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
              style={{ width: "100%", minHeight: "80px" }}
            />
          ) : question.type === "CHOICE" && question.choices ? (
            <ChoiceSelector
              question={question}
              value={
                Array.isArray(answers[question.questionId])
                  ? (answers[question.questionId] as number[])
                  : []
              }
              onChange={(newValue) => handleAnswerChange(question.questionId, newValue)}
            />
          ) : null}
        </div>
      ))}
      <div>
        <button onClick={handleSave} disabled={saveLoading}>
          {saveLoading ? "저장중..." : "임시저장"}
        </button>
        <button onClick={handleSubmit} disabled={submitLoading}>
          {submitLoading ? "제출중..." : "제출"}
        </button>
      </div>
      {saveError && <div style={{ color: "red" }}>임시저장 에러: {saveError.message}</div>}
      {submitError && <div style={{ color: "red" }}>제출 에러: {submitError.message}</div>}
    </div>
  );
}
