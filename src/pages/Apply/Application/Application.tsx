import { useState } from "react";
import * as S from "./Application.styles";
import useMediaQueries from "@/hooks/useMediaQueries";
import IoTTrack from "./IoTTrack";
import GameTrack from "./GameTrack";
import BigDataTrack from "./BigDataTrack";
import SecureWebTrack from "./SecureWebTrack";
import AITrack from "./AITrack";

export default function PersonalInfo() {
  const [selectedTrack, setSelectedTrack] = useState<string>("사물인터넷/로봇");
  const { isMobile } = useMediaQueries();
  const options = ["유니온", "게임/영상", "사물인터넷/로봇", "빅데이터", "보안/웹", "인공지능"];
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedTrack(option);
    setIsOpen(false);
  };
  
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    email: "",
    affiliation: "",
    stdNumber: "",
  });

  const [iotQuestions, setIotQuestions] = useState({
    selectedFields: [] as string[],
    reason: "",
    projectIdea: "",
    goals: "",
    portfolioLink: "",
  });
  
  const [gameQuestions, setGameQuestions] = useState({
    selectedFields1: [] as string[],
    selectedFields2: [] as string[],
    experience: "",
    cooperation: "",
    media: "",
    portfolioLink: "",
  });

  const [BigDataQuestions, setBigDataQuestions] = useState({
    skills: "",
    experience: "",
    project: "",
    portfolioLink: "",
  });

  const [SecureWebQuestions, setSecureWebQuestions] = useState({
    selectedFields: [] as string[],
    project: "",
    experience: "",
    secureIdea: "",
    portfolioLink: "",
  });

  const [AIQuestions, setAIQuestions] = useState({
    experience: "",
    cooperation: "",
    portfolioLink: "",
  });
  

  // 개인정보 동의 체크박스 상태
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  // 개인 정보 오류 상태
  const [personalErrors, setPersonalErrors] = useState({
    name: false,
    phone: false,
    email: false,
    affiliation: false,
    stdNumber: false,
  });

  // 질문 목록 오류 상태
  const [IoTquestionErrors, setIoTQuestionErrors] = useState({
    reason: false,
    projectIdea: false,
    goals: false,
  });
  const [GamequestionErrors, setGameQuestionErrors] = useState({
    experience: false,
    cooperation: false,
    media: false,
  });
  const [BigDataquestionErrors, setBigDataQuestionErrors] = useState({
    skills: false,
    experience: false,
  });
  const [SecureWebquestionErrors, setSecureWebQuestionErrors] = useState({
    project: false,
    experience: false,
    secureIdea: false,
  });
  const [AIquestionErrors, setAIQuestionErrors] = useState({
    experience: false,
    cooperation: false,
  });

  // 개인 정보 입력 처리
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // 전화번호 형식 자동 변환
    if (name === "phone") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        .slice(0, 13);
    }

    setPersonalInfo((prev) => ({ ...prev, [name]: formattedValue }));
    setPersonalErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  const handlePersonalBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setPersonalErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };  


  // 트랙 선택 처리(아직 필요 없음)
//   const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedTrack(e.target.value);
  
    
//   };
  

  // 개인정보 동의 체크박스 처리
  const handleAgreeChange1 = () => setAgree1((prev) => !prev);
  const handleAgreeChange2 = () => setAgree2((prev) => !prev);  

  return (
    <S.Container>
      <S.Title $isMobile={isMobile}>개인 정보</S.Title>

      {/* 개인 정보 입력 */}
      {Object.keys(personalInfo).map((key) => (
        <S.InfoContainer $isMobile={isMobile} key={key}>
          <S.Label $isMobile={isMobile}>
            {key === "name" && "이름"}
            {key === "phone" && "전화번호"}
            {key === "email" && "이메일"}
            {key === "affiliation" && "소속"}
            {key === "stdNumber" && "학번"}
            <S.Required>*</S.Required>
          </S.Label>
          <S.Input
            $isMobile={isMobile}
            type="text"
            name={key}
            placeholder={
              key === "name"
                ? "이름을 입력해주세요"
                : key === "phone"
                ? "ex) 010-1234-5678"
                : key === "email"
                ? "이메일을 입력해주세요"
                : key === "affiliation"
                ? "ex) 첨단융합대학 컴퓨터/AI학부"
                : "학번을 입력해주세요. ex) 2025123456"
            }
            value={personalInfo[key as keyof typeof personalInfo]}
            onBlur={handlePersonalBlur} 
            onChange={handlePersonalChange}
            $error={personalErrors[key as keyof typeof personalErrors]}
          />
          {personalErrors[key as keyof typeof personalErrors] ? (
            <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
          ) : (
            <S.Box />
          )}
        </S.InfoContainer>
      ))}
      <S.Title $isMobile={isMobile}>지원하는 트랙</S.Title>

      <S.Label $isMobile={isMobile}>지원하는 트랙을 선택해주세요.</S.Label>

      <S.SelectContainer $isMobile={isMobile}>
      <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
        {selectedTrack || "트랙을 선택해주세요"}
      </S.SelectButton>
      {isOpen && (
        <S.Dropdown>
          {options.map((option) => (
            <S.Option key={option} onClick={() => handleSelect(option)}>
              {option}
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.SelectContainer>
      
      <S.Title $isMobile={isMobile}>질문 목록</S.Title>

      {selectedTrack === "사물인터넷/로봇" ? (
        <IoTTrack
            questions={iotQuestions}
            setQuestions={setIotQuestions}
            questionErrors={IoTquestionErrors}
            setQuestionErrors={setIoTQuestionErrors}
            isMobile={isMobile}
        />
        ) : selectedTrack === "게임/영상" ? (
        <GameTrack
            questions={gameQuestions}
            setQuestions={setGameQuestions}
            questionErrors={GamequestionErrors}
            setQuestionErrors={setGameQuestionErrors}
            isMobile={isMobile}
        />
        ) : selectedTrack === "빅데이터" ? (
        <BigDataTrack
            questions={BigDataQuestions}
            setQuestions={setBigDataQuestions}
            questionErrors={BigDataquestionErrors}
            setQuestionErrors={setBigDataQuestionErrors}
            isMobile={isMobile}
        />
        ) : selectedTrack === "보안/웹" ? (
        <SecureWebTrack
            questions={SecureWebQuestions}
            setQuestions={setSecureWebQuestions}
            questionErrors={SecureWebquestionErrors}
            setQuestionErrors={setSecureWebQuestionErrors}
            isMobile={isMobile}
        />
        ) : selectedTrack === "인공지능" ? (
            <AITrack
            questions={AIQuestions}
            setQuestions={setAIQuestions}
            questionErrors={AIquestionErrors}
            setQuestionErrors={setAIQuestionErrors}
            isMobile={isMobile}
        />
        ) : null}



      {/* 개인정보 동의 체크박스 */}
      <S.AgreeContainer $isMobile={isMobile}>
        <S.Checkbox type="checkbox" checked={agree1} onChange={handleAgreeChange1} />
        <S.AgreeText>개인정보 수집 및 이용에 동의합니다.</S.AgreeText>
      </S.AgreeContainer>

      <S.AgreeContainer $isMobile={isMobile}>
        <S.Checkbox type="checkbox" checked={agree2} onChange={handleAgreeChange2} />
        <S.AgreeText>지원서 제출 후, 수정 및 추가 제출이 불가능합니다.</S.AgreeText>
      </S.AgreeContainer>

      {/* 임시 저장 & 제출 버튼 */}
      <S.ButtonContainer $isMobile={isMobile}>
        <S.Button $isMobile={isMobile} gray disabled={!agree1}>임시저장하기</S.Button>
        <S.Button $isMobile={isMobile} green disabled={!(agree1 && agree2)}>제출하기</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
