import { useState } from "react";
import * as S from "./Application.styles";
import useMediaQueries from "@/hooks/useMediaQueries";

export default function PersonalInfo() {
  const { isMobile } = useMediaQueries();
  // ✅ 개인 정보 저장
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    email: "",
    affiliation: "",
    stdNumber: "",
  });

  // ✅ 질문 목록 저장
  const [questions, setQuestions] = useState({
    selectedFields: [] as string[],
    reason: "",
    projectIdea: "",
    goals: "",
    portfolioLink: "",
  });

  // ✅ 개인정보 동의 체크박스 상태
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  // ✅ 개인 정보 오류 상태
  const [personalErrors, setPersonalErrors] = useState({
    name: false,
    phone: false,
    email: false,
    affiliation: false,
    stdNumber: false,
  });

  // ✅ 질문 목록 오류 상태
  const [questionErrors, setQuestionErrors] = useState({
    reason: false,
    projectIdea: false,
    goals: false,
  });

  // ✅ 개인 정보 입력 처리
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

  // ✅ 질문 목록 입력 처리
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      setQuestions((prev) => ({
        ...prev,
        selectedFields: checked
          ? [...prev.selectedFields, value]
          : prev.selectedFields.filter((field) => field !== value),
      }));
    } else {
      setQuestions((prev) => ({ ...prev, [name]: value }));
    }

    setQuestionErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  // ✅ 개인정보 동의 체크박스 처리
  const handleAgreeChange1 = () => setAgree1((prev) => !prev);
  const handleAgreeChange2 = () => setAgree2((prev) => !prev);  

  return (
    <S.Container>
      <S.Title $isMobile={isMobile}>개인 정보</S.Title>

      {/* ✅ 개인 정보 입력 */}
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
                ? "010-1234-5678"
                : key === "email"
                ? "이메일을 입력해주세요"
                : key === "affiliation"
                ? "ex) 첨단융합대학 컴퓨터/AI학부"
                : "학번을 입력해주세요. ex) 2025123456"
            }
            value={personalInfo[key as keyof typeof personalInfo]}
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

      <S.Title $isMobile={isMobile}>질문 목록</S.Title>

      {/* ✅ 1. 사물인터넷/로봇 트랙에서 희망하는 분야 선택 */}
      <S.Label $isMobile={isMobile}>
        1. 사물인터넷/로봇 트랙에서 학습을 희망하는 분야를 모두 선택해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(중복 선택 가능)</S.SubLabel>
      <S.CheckboxContainer $isMobile={isMobile}>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields"
            value="라즈베리파이/임베디드시스템"
            checked={questions.selectedFields.includes("라즈베리파이/임베디드시스템")}
            onChange={handleQuestionChange}
          />
          라즈베리파이/임베디드시스템
        </S.CheckboxLabel>
        <S.CheckboxLabel $isMobile={isMobile}>
          <S.Checkbox
            type="checkbox"
            name="selectedFields"
            value="ROS2"
            checked={questions.selectedFields.includes("ROS2")}
            onChange={handleQuestionChange}
          />
          ROS2
        </S.CheckboxLabel>
      </S.CheckboxContainer>
      <S.Box />

      {/* ✅ 2. 해당 분야를 선택한 이유 */}
      <S.Label $isMobile={isMobile}>
        2. 위의 문항에서 해당 분야를 선택한 이유를 구체적으로 작성해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="reason"
        placeholder="내용을 입력해주세요."
        value={questions.reason}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, reason: e.target.value.trim() === "" }))}
        $error={questionErrors.reason} 
        maxLength={500}
        />

      {questionErrors.reason ? (
        <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
      ) : (
        <S.Box />
      )}

      {/* ✅ 3. 희망하는 기업 연계 및 프로젝트 주제 */}
      <S.Label $isMobile={isMobile}>
        3. 사물인터넷/로봇 트랙의 기업 연계 및 자율 프로젝트에서 진행하고 싶은 프로젝트 주제와 그 이유를 작성해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="pfojectIdea"
        placeholder="내용을 입력해주세요."
        value={questions.projectIdea}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, projectIdea: e.target.value.trim() === "" }))}
        $error={questionErrors.projectIdea}
        maxLength={500}
        />

      {questionErrors.projectIdea ? (
        <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
      ) : (
        <S.Box />
      )}
    {/* ✅ 4. Farm System 활동 목표 및 기대 */}
    <S.Label $isMobile={isMobile}>
        4. Farm System 4기 사물인터넷/로봇 트랙의 활동을 통해서 이루고자 하는 목표 및 기대하는 바에 대해서 작성해주세요.
        <S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="goals"
        placeholder="내용을 입력해주세요."
        value={questions.goals}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, goals: e.target.value.trim() === "" }))}
        $error={questionErrors.goals} 
        maxLength={500}
        />
      {questionErrors.goals ? (
        <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
      ) : (
        <S.Box />
      )}

      {/* ✅ 5. 포트폴리오 / Github 등 링크 제출 */}
      <S.Label $isMobile={isMobile}>5. 나를 표현할 수 있는 주소가 있다면 첨부해주세요.</S.Label>
      <S.SubLabel $isMobile={isMobile}>Github, LinkedIn, 개인 블로그, 포트폴리오 등</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="portfolioLink"
        placeholder="내용을 입력해주세요."
        value={questions.portfolioLink}
        onChange={handleQuestionChange}
      />
      <S.Box />

      {/* ✅ 개인정보 동의 체크박스 */}
      <S.AgreeContainer $isMobile={isMobile}>
        <S.Checkbox type="checkbox" checked={agree1} onChange={handleAgreeChange1} />
        <S.AgreeText>개인정보 수집 및 이용에 동의합니다.</S.AgreeText>
      </S.AgreeContainer>

      <S.AgreeContainer $isMobile={isMobile}>
        <S.Checkbox type="checkbox" checked={agree2} onChange={handleAgreeChange2} />
        <S.AgreeText>지원서 제출 후, 수정 및 추가 제출이 불가능합니다.</S.AgreeText>
      </S.AgreeContainer>

      {/* ✅ 임시 저장 & 제출 버튼 */}
      <S.ButtonContainer $isMobile={isMobile}>
        <S.Button gray>임시저장하기</S.Button>
        <S.Button green disabled={!(agree1 && agree2)}>제출하기</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
