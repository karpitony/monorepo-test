import { useState, useRef } from "react";
import * as S from "./Step2.styles"; 
import useMediaQueries from "@/hooks/useMediaQueries";
import LeftArrow from '../../../assets/LeftArrow.png';

export default function Step2({ setStep }: { setStep: (step: number) => void }) {
  const { isMobile } = useMediaQueries();
  const [studentId, setStudentId] = useState(""); 
  const [password, setPassword] = useState(["", "", "", "", "", ""]); 
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setStudentId(value);
  };

  const handlePasswordChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newPass = [...password];
    newPass[index] = value;
    setPassword(newPass);

    if (value && index < 5) inputRefs.current[index + 1]?.focus(); 
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !password[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <S.Container>
      {/* 학번 입력 */}
      <S.Label>학번(10자리)</S.Label>
      <S.Input
        type="text"
        value={studentId}
        onChange={handleStudentIdChange}
        maxLength={10}
        placeholder="ex) 2025123456"
      />

      {/* 비밀번호 입력 */}
      <S.Label>비밀번호(숫자 6자리)</S.Label>
      <S.PasswordContainer>
        {password.map((num, index) => (
          <S.PasswordInput
            key={index}
            type="text"
            value={num}
            onChange={(e) => handlePasswordChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            placeholder="_"
          />
        ))}
      </S.PasswordContainer>

      {/* 안내 문구 */}
      <S.InfoContainer>
        <S.InfoStar>* </S.InfoStar><S.InfoText>입력한 학번과 비밀번호를 통해 지원서를 언제든 불러올 수 있어요.</S.InfoText>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoStar>* </S.InfoStar><S.InfoText>학번과 비밀번호는 수정이 불가하며, 비밀번호를 잊어버렸을 경우 <br />새로 작성해야 해요. 신중하게 입력해주세요! </S.InfoText>
      </S.InfoContainer>

      {/* 버튼 */}
      <S.Button green>지원서 작성하러 가기</S.Button>
      <S.BackTextContainer $isMobile={isMobile} onClick={() => setStep(1)}>
        <S.Arrow src={LeftArrow} alt="RightArrow" />
        <S.BackText onClick={() => setStep(1)}>지원하기 첫 페이지로 돌아가기</S.BackText>
      </S.BackTextContainer>
    </S.Container>
  );
}
