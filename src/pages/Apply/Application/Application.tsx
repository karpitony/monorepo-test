import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import * as S from "./Application.styles";
import useMediaQueries from "@/hooks/useMediaQueries";
import { 
    useApplyQuestions, 
    useSaveApply, 
    useSubmitApply, 
    useLoadApply 
  } from "@/hooks/useApply";
import { ApplyAnswer, Answer, Track } from "@/models/apply";
import PersonalInfo from "./PersonInfo";
import Popup from '@/components/Popup/Popup';

const defaultTrack: Track = Track.UNION;
type AnswerMap = Record<number, { content: string; choiceId: number[] }>;

// 트랙 영문-한글 매핑
const trackOptions = [
  { key: "UNION", label: "유니온" },
  { key: "GAMING_VIDEO", label: "게임/영상" },
  { key: "IOT_ROBOTICS", label: "사물인터넷/로봇" },
  { key: "BIGDATA", label: "빅데이터" },
  { key: "SECURITY_WEB", label: "보안/웹" },
  { key: "AI", label: "인공지능" }
];

interface ApplicationProps {
    setStep: (step: number) => void;
    propStudentNumber: string;
    propPassword: string;
  }

export default function Application({ setStep, propStudentNumber, propPassword }: ApplicationProps) {
  
    const navigate = useNavigate();
//   const [isPopupOpen, setPopupOpen] = useState(false);
  const [studentNumber, setStudentNumber] = useState(propStudentNumber);
  const [password, setPassword] = useState(propPassword);
//   const [status, setStatus] = useState(propStatus);
  const { isMobile } = useMediaQueries();
  const [selectedTrack, setSelectedTrack] = useState<Track>(defaultTrack); 
  const [isOpen, setIsOpen] = useState(false);
  const { data: questionsData } = useApplyQuestions();

  const { saveApply } = useSaveApply();
  const { submitApply } = useSubmitApply();
  const { loadApply } = useLoadApply();

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [loadedData, setLoadedData] = useState<ApplyAnswer | null>(null);
  const [applyStatus, setApplyStatus] = useState<string>("");

  console.log(studentNumber, password);
  console.log("데이터"+ loadedData);

  useEffect(() => {
    const handlePopState = () => {
        setStep(2); 
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
        window.removeEventListener("popstate", handlePopState);
    };
}, [setStep]);

  const buildApplyData = (): ApplyAnswer => {
    console.log('학번'+loadedData);
    if (loadedData) {
      return {
        ...loadedData,
        track: selectedTrack,
        answers: transformAnswers(),
      };
    }
    throw new Error("지원서 데이터 구성 실패: 로드된 데이터가 없습니다.");
  };

  const updateLoadedData = () => {
    
    // if (loadedData) {
      if (loadedData) {
        setLoadedData({
          ...loadedData,
          name,
          major,
          email,
          phoneNumber,
          applyId: loadedData.applyId, 
          track: loadedData.track,
        });
      }
  };

  const handleSave = async () => {
    updateLoadedData();
    try {
      const response = await saveApply(buildApplyData());
      console.log("임시저장 성공:", response);
      setSavePopupOpen(true); // 정상적으로 저장되었을 때 팝업
    } catch (err) {
      console.error("임시저장 에러:", err);
  
    //   if (err.response && err.response.status === 400) {
        setSaveErrorPopupOpen(true); // 400 에러 발생 시 에러 팝업
    //   }
    }
  };
  

  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isSavePopupOpen, setSavePopupOpen] = useState(false);
  const [isSaveErrorPopupOpen, setSaveErrorPopupOpen] = useState(false);

  
  const handleConfirmSubmit = () => {
    setConfirmPopupOpen(true); // 제출 확인 팝업 열기
  };
  
  const handleSubmit = async () => {
    setConfirmPopupOpen(false); // 확인 팝업 닫기
  
    try {
      const response = await submitApply(buildApplyData());
      console.log("제출 성공:", response);
      setApplyStatus("SUBMITTED");
      setSuccessPopupOpen(true); // 제출 완료 팝업 열기
    } catch (err) {
      console.error("제출 에러:", err);
      setSaveErrorPopupOpen(true);
    }
  };
  
  const handleSuccessPopupClose = () => {
    setSuccessPopupOpen(false);
    navigate("/"); // 홈으로 이동
  };

  const transformAnswers = (): Answer[] => {
    return Object.entries(answers).map(([questionId, answer]) => ({
      questionId: Number(questionId),
      content: answer.content,
      choiceId: answer.choiceId,
    }));
  };

  useEffect(() => {
      if (studentNumber && password) {
        console.log('안뇽');
        loadApply({ studentNumber, password })
          
          .then((res) => {
            console.log('안뇽');
            if (res.data) {
              setLoadedData(res.data);
              setApplyStatus(res.data.status);
              const answerMap: AnswerMap = {};
              res.data.answers.forEach((ans) => {
                answerMap[ans.questionId] = {
                  content: ans.content ?? "",
                  choiceId: ans.choiceId ?? [],
                };
              });
              setAnswers(answerMap);
              setSelectedTrack(res.data.track);
            }
          })
          .catch((err) => {
            console.error("지원서 로드 에러:", err);
          });
      }
    // loadApply 넣으면 무한 호출됨
    }, [studentNumber, password]);

  const [personalErrors, setPersonalErrors] = useState({
    name: false,
    phone: false,
    email: false,
    affiliation: false,
    stdNumber: false,
  });
  

  // 트랙 선택 핸들러
  const handleSelect = (optionKey: Track) => {
    setSelectedTrack(optionKey);
    setIsOpen(false);
  };

  // 현재 선택된 트랙의 한글명 가져오기
  const selectedTrackLabel = trackOptions.find(track => track.key === selectedTrack)?.label || "트랙을 선택해주세요";

  // 선택한 트랙의 질문 필터링
  const filteredQuestions = questionsData?.data?.filter(q => q.track === selectedTrack) || [];

  // 오류 상태 저장 (질문 ID 기준)
  const [questionErrors, setQuestionErrors] = useState<{ [key: number]: boolean }>({});

  // 입력 변경 핸들러 (ESSAY 타입)
  const handleQuestionChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], content: value }
    }));
  
    const isRequired = filteredQuestions.find(q => q.questionId === questionId)?.isRequired;
    if (isRequired) {
      setQuestionErrors(prev => ({ ...prev, [questionId]: value.trim() === "" }));
    }
  };
  

  // 체크박스 변경 핸들러 (CHOICE 타입)
const handleCheckboxChange = (questionId: number, choiceId: number) => {
  setAnswers(prev => {
    const prevChoices = prev[questionId]?.choiceId || [];
    const updatedChoices = prevChoices.includes(choiceId)
      ? prevChoices.filter(c => c !== choiceId)
      : [...prevChoices, choiceId];

    return {
      ...prev,
      [questionId]: { ...prev[questionId], choiceId: updatedChoices }
    };
  });
};


  // 개인정보 동의 체크박스 상태
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  useEffect(() => {
    if (questionsData?.data) {
      console.log("질문 데이터:", questionsData.data);
    }
  }, [questionsData]);

  
  const [name, setName] = useState("");
const [major, setMajor] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");

useEffect(() => {
  if (loadedData) {
    setName(loadedData.name ?? "");
    setMajor(loadedData.major ?? "");
    setEmail(loadedData.email ?? "");
    setPhoneNumber(loadedData.phoneNumber ?? "");
  }
}, [loadedData]);


  return (
    <S.Container>
        <PersonalInfo
        studentNumber={studentNumber}
        password={password}
        name={name}
        major={major}
        email={email}
        phoneNumber={phoneNumber}
        onStudentNumberChange={setStudentNumber}
        onPasswordChange={setPassword}
        onNameChange={setName}
        onMajorChange={setMajor}
        onEmailChange={setEmail}
        onPhoneNumberChange={setPhoneNumber}
        personalErrors={personalErrors}
        setPersonalErrors={setPersonalErrors}
        isMobile={isMobile}
        disabled={applyStatus === "SUBMITTED"}
        />

      <S.Title $isMobile={isMobile}>지원하는 트랙</S.Title>

      <S.Label $isMobile={isMobile}>지원하는 트랙을 선택해주세요.</S.Label>
      <S.SelectContainer $isMobile={isMobile}>
        <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
          {selectedTrackLabel}
        </S.SelectButton>
        {isOpen && (
          <S.Dropdown>
            {trackOptions.map((option) => (
              <S.Option key={option.key} onClick={() => handleSelect(option.key as Track)}>
                {option.label}
              </S.Option>
            ))}
          </S.Dropdown>
        )}
      </S.SelectContainer>

      <S.Title $isMobile={isMobile}>질문 목록</S.Title>

      {filteredQuestions.map((question) => (
        <S.InfoContainer $isMobile={isMobile} key={question.questionId}>
          <S.Label $isMobile={isMobile}>
            {question.priority + 1}. {question.content}
            {question.isRequired && <S.Required>*</S.Required>}
          </S.Label>
          <S.SubLabel $isMobile={isMobile}>
            {question.maxLength ? `(${question.maxLength}자 이내)` : "(중복 선택 가능)"}
          </S.SubLabel>

          {/* ESSAY 타입: Textarea */}
          {question.type === "ESSAY" ? (
            <S.Textarea
              $isMobile={isMobile}
              name={`question-${question.questionId}`}
              placeholder="내용을 입력해주세요."
              value={answers[question.questionId]?.content || ""}
              onChange={(e) => handleQuestionChange(question.questionId, e.target.value)}
              onBlur={(e) => handleQuestionChange(question.questionId, e.target.value)}
              $error={questionErrors[question.questionId] || false}
              maxLength={question.maxLength || undefined}
              disabled={applyStatus === "SUBMITTED"}
            />
          ) : (
            /* CHOICE 타입: Checkbox */
            <S.CheckboxContainer $isMobile={isMobile}>
              {question.choices?.map((choice) => (
                <S.CheckboxLabel key={choice.choiceId} $isMobile={isMobile}>
                  <S.Checkbox
                    type="checkbox"
                    name={`question-${question.questionId}`}
                    value={choice.content}
                    checked={answers[question.questionId]?.choiceId.includes(choice.choiceId) || false}
                    onChange={() => handleCheckboxChange(question.questionId, choice.choiceId)}
                    disabled={applyStatus === "SUBMITTED"}
                  />
                  {choice.content}
                </S.CheckboxLabel>
              ))}
            </S.CheckboxContainer>
          )}

          {/* 오류 메시지 표시 */}
          {question.isRequired && questionErrors[question.questionId] ? (
            <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
          ) : (
            <S.Box />
          )}
        </S.InfoContainer>
      ))}


        {applyStatus !== "SUBMITTED" && (
        <>
            {/* 개인정보 동의 체크박스 */}
            <S.AgreeContainer $isMobile={isMobile}>
            <S.Checkbox type="checkbox" checked={agree1} onChange={() => setAgree1((prev) => !prev)} />
            <S.AgreeText>개인정보 수집 및 이용에 동의합니다.</S.AgreeText>
            </S.AgreeContainer>

            <S.AgreeContainer $isMobile={isMobile}>
            <S.Checkbox type="checkbox" checked={agree2} onChange={() => setAgree2((prev) => !prev)} />
            <S.AgreeText>지원서 제출 후, 수정 및 추가 제출이 불가능합니다.</S.AgreeText>
            </S.AgreeContainer>

            {/* 임시 저장 & 제출 버튼 */}
            <S.ButtonContainer $isMobile={isMobile}>
            <S.Button $isMobile={isMobile} gray disabled={!agree1} onClick={handleSave}>
                임시저장하기
            </S.Button>
            <S.Button $isMobile={isMobile} green disabled={!(agree1 && agree2)} onClick={handleConfirmSubmit}>
                제출하기
            </S.Button>
            </S.ButtonContainer>
        </>
        )}

     
        <Popup 
        isOpen={isConfirmPopupOpen} 
        onClose={() => setConfirmPopupOpen(false)} 
        title="제출하시겠습니까?"
        content="한번 제출하시면 수정이 불가합니다. 또한 동일한 학번으로 재제출도 불가합니다."
        onConfirm={handleSubmit}
        />

        
        <Popup 
        isOpen={isSuccessPopupOpen} 
        onClose={handleSuccessPopupClose} 
        title="제출 완료"
        content="지원서가 성공적으로 제출되었습니다."
        />

        <Popup 
        isOpen={isSavePopupOpen} 
        onClose={() => setSavePopupOpen(false)} 
        title="임시저장 완료"
        content="지원서가 성공적으로 저장되었습니다."
        />

        <Popup 
        isOpen={isSaveErrorPopupOpen} 
        onClose={() => setSaveErrorPopupOpen(false)} 
        title="임시저장 실패"
        content="해당 학번으로 제출한 이력이 있어 저장이 불가능합니다."
        />

    </S.Container>
  );
}
