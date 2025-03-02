import * as S from "./Application.styles";

interface QuestionsProps {
  questions: {
    experience: string;
    cooperation: string;
    portfolioLink: string;
  };
  setQuestions: React.Dispatch<
    React.SetStateAction<{
      experience: string;
      cooperation: string;
      portfolioLink: string;
    }>
  >;
  questionErrors: {
    experience: boolean;
    cooperation: boolean;
  };
  setQuestionErrors: React.Dispatch<
    React.SetStateAction<{
      experience: boolean;
      cooperation: boolean;
    }>
  >;
  isMobile: boolean;
}

export default function AITrack({
  questions,
  setQuestions,
  questionErrors,
  setQuestionErrors,
  isMobile,
}: QuestionsProps) {
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    // const checked = (e.target as HTMLInputElement).checked;

    
      setQuestions((prev) => ({ ...prev, [name]: value }));
    

    setQuestionErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  return (
    <>
      <S.Label $isMobile={isMobile}>
        1. 인공지능 중 관심 있는 세부 분야 및 관련된 활동 경험을 자유롭게 적어주세요. (자연어처리, 컴퓨터 비전, 강화 학습, 멀티 모달 등).<S.Required>*</S.Required>
      </S.Label>
      <S.SubLabel $isMobile={isMobile}>(500자 이내)</S.SubLabel>
      <S.Textarea
        $isMobile={isMobile}
        name="experience"
        placeholder="내용을 입력해주세요."
        value={questions.experience}
        onChange={handleQuestionChange}
        onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, experience: e.target.value.trim() === "" }))}
        $error={questionErrors.experience}
        maxLength={500}
      />
    {questionErrors.experience ? (
      <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
    ) : (
      <S.Box />
    )}
    
            <S.Label $isMobile={isMobile}>
              2. 인공지능 및 기타 프로젝트 등에서 경험했던 자신의 성장 과정 및 갈등을 ‘협업’을 중심으로 작성해주세요. 
              <S.Required>*</S.Required>
            </S.Label>
            <S.SubLabel $isMobile={isMobile}>(300자 이내)</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="cooperation"
              placeholder="내용을 입력해주세요."
              value={questions.cooperation}
              onChange={handleQuestionChange}
              onBlur={(e) => setQuestionErrors((prev) => ({ ...prev, cooperation: e.target.value.trim() === "" }))}
              $error={questionErrors.cooperation}
              maxLength={300}
              />
      
            {questionErrors.cooperation ? (
              <S.ErrorMessage $isMobile={isMobile}>필수로 입력해야 하는 항목입니다.</S.ErrorMessage>
            ) : (
              <S.Box />
            )}
            
            <S.Label $isMobile={isMobile}>3. 나를 표현할 수 있는 주소가 있다면 첨부해주세요.</S.Label>
            <S.SubLabel $isMobile={isMobile}>Github, LinkedIn, 개인 블로그, 포트폴리오 등</S.SubLabel>
            <S.Textarea
              $isMobile={isMobile}
              name="portfolioLink"
              placeholder="내용을 입력해주세요."
              value={questions.portfolioLink}
              onChange={handleQuestionChange}
            />
            <S.Box />
    </>
  );
}