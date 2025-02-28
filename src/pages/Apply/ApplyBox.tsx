import { useState, useEffect } from "react";
import { 
  useApplyQuestions, 
  useSaveApply, 
  useSubmitApply, 
  useLoadApply 
} from "@/hooks/useApply";
import { ApplyQuestion, Choice, ApplyAnswer, Answer, Track } from "@/models/apply";

const defaultTrack: Track = Track.UNION;
type AnswerMap = Record<number, string | number[]>;
interface ApplyBoxProps {
  isFirst: boolean;
  propStudentNumber?: string;
  propPassword?: string;
}

export default function ApplyBox({ isFirst, propStudentNumber, propPassword }: ApplyBoxProps) {
  const { data: questionsData, loading: questionsLoading, error: questionsError } = useApplyQuestions();
  const { saveApply, applyId: savedApplyId, loading: saveLoading, error: saveError } = useSaveApply();
  const { submitApply, applyId: submittedApplyId, loading: submitLoading, error: submitError } = useSubmitApply();
  const loadApply = useLoadApply();

  const [studentNumber, setStudentNumber] = useState(propStudentNumber || "");
  const [password, setPassword] = useState(propPassword || "");
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [loadedData, setLoadedData] = useState<ApplyAnswer | null>(null);

  // 답변 변경 핸들러
  const handleAnswerChange = (questionId: number, value: string | number[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // answer 배열로 변환 (ApplyAnswer.answers 타입에 맞게)
  const transformAnswers = (): Answer[] => {
    return Object.entries(answers).map(([questionId, content]) => ({
      questionId: Number(questionId),
      content,
    }));
  };

  // isFirst가 false이면 기존 지원서 데이터를 로드해서 폼 채우기
  useEffect(() => {
    if (!isFirst && studentNumber && password) {
      loadApply({ studentNumber, password })
        .then((data) => {
          if (data.data) {
            setLoadedData(data.data);
            // 기존 데이터의 answers 배열을 AnswerMap으로 변환
            const answerMap: AnswerMap = {};
            data.data.answers.forEach((ans) => {
              answerMap[ans.questionId] = ans.content;
            });
            setAnswers(answerMap);
          }
        })
        .catch((err) => {
          console.error("지원서 로드 에러:", err);
        });
    }
  }, [isFirst, studentNumber, password, loadApply]);

  // 지원서 데이터 구성 함수
  const buildApplyData = (): Omit<ApplyAnswer, "applyId"> | ApplyAnswer => {
    if (!isFirst) {
      if (!loadedData) {
        throw new Error("기존 지원서 데이터를 불러오지 못했습니다.");
      }
      return {
        ...loadedData,
        answers: transformAnswers(),
      };
    }
    // 첫 지원서 작성인 경우, 나머지 필드는 기본값(빈 문자열, defaultTrack 등)으로 처리
    return {
      name: "",
      major: "",
      phoneNumber: "",
      email: "",
      track: defaultTrack,
      answers: transformAnswers(),
    };
  };

  // 임시저장 버튼 클릭
  const handleSave = async () => {
    try {
      const response = await saveApply({
        isFirst,
        studentNumber,
        password,
        applyData: buildApplyData(),
      });
      console.log("임시저장 성공:", response);
    } catch (err) {
      console.error("임시저장 에러:", err);
    }
  };

  // 제출 버튼 클릭
  const handleSubmit = async () => {
    try {
      const response = await submitApply({
        isFirst,
        studentNumber,
        password,
        applyData: buildApplyData(),
      });
      console.log("제출 성공:", response);
    } catch (err) {
      console.error("제출 에러:", err);
    }
  };

  if (questionsLoading) return <div>질문 로딩중...</div>;
  if (questionsError) return <div>질문 로딩 에러: {questionsError.message}</div>;

  return (
    <div>
      <h1>지원서 작성</h1>
      <div>
        <label>
          학번:
          <input
            type="text"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <hr />

      {questionsData?.data?.map((question: ApplyQuestion) => (
        <div key={question.questionId} style={{ marginBottom: "1rem" }}>
          <p>
            {question.priority}. {question.content}{" "}
            {question.isRequired && <span style={{ color: "red" }}>*</span>}
          </p>
          {question.type === "ESSAY" ? (
            <textarea
              maxLength={question.maxLength}
              value={typeof answers[question.questionId] === "string" ? answers[question.questionId] as string : ""}
              onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
              style={{ width: "100%", minHeight: "80px" }}
            />
          ) : question.type === "CHOICE" && question.choices ? (
            <select
              multiple
              value={
                Array.isArray(answers[question.questionId])
                  ? (answers[question.questionId] as number[]).map(String)
                  : []
              }
              onChange={(e) => {
                const selectedValues = Array.from(e.target.selectedOptions, (option) => Number(option.value));
                handleAnswerChange(question.questionId, selectedValues);
              }}
            >
              {question.choices.map((choice: Choice) => (
                <option key={choice.choicedId} value={choice.choicedId}>
                  {choice.content}
                </option>
              ))}
            </select>
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

      {savedApplyId && <div>임시저장된 지원서 ID: {savedApplyId}</div>}
      {submittedApplyId && <div>제출된 지원서 ID: {submittedApplyId}</div>}
    </div>
  );
}
