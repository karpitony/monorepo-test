import { useState } from 'react';
import styled from 'styled-components';
import ApplyBox from './ApplyBox';

export default function Apply() {
  const [choice, setChoice] = useState<" " | "새 지원서" | "불러오기">(" ");
  return (
    <ApplyContainer>
      <h1>Apply Page </h1>
      {choice === " " ?
        <ButtonContainer>
          <h2>지원서 작성 방법을 선택해주세요</h2>
          <button onClick={() => setChoice("새 지원서")}>새 지원서 작성</button>
          <button onClick={() => setChoice("불러오기")}>지원서 불러오기</button>
        </ButtonContainer>
        :
        <>
          <button onClick={() => setChoice(" ")}>돌아가기</button>
          <ApplyBox isFirst={choice === "새 지원서"} />
        </>
      }
    </ApplyContainer>
  );
}

const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;