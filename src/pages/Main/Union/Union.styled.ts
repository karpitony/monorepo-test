import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 1500px;
  user-select: none;

  @media (max-width: 768px) {
    padding: 20px; /* 모바일에서 여백 추가 */
    height: auto;  /* 필요에 따라 높이를 자동으로 조정 */
  }
`;

export const IntroduceText = styled.p`
  width: 500px;  
  height: 86px;

  text-align: center; 
  color: var(--FarmSystem_Black);
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  
  margin-bottom: 70px;

  @media (max-width: 768px) {
    width: 100%;  /* 화면에 맞게 폭 확장 */
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 50px;
  }
`;

/* 
  이걸 그리드로 해결한 건 진짜 레전드 씽크빅이다... 
  진짜 이걸 어떻게 떠올렸지?????
*/
export const UnionTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;  /* 4분할 */
  justify-items: center;  /* 그리드 셀 내에서 중앙 정렬 */
  align-items: center;
  width: 280px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    grid-template-columns: 1fr 2fr 1fr;  /* 모바일에서는 더 간결하게 조정 가능 */
  }
`;

export const UnionText = styled.h2`
  grid-column: 2 / 4;  /* 두 번째에서 세 번째 그리드 셀을 차지 */
  text-align: center;
  color: var(--FarmSystem_Orange);
  font-size: 48px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const NewBadge = styled.div`
  grid-column: 4 / 5;  /* 네 번째 그리드 셀에 배치 */
  width: 70px;
  height: 25px;
  background: var(--FarmSystem_Green02);
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--FarmSystem_White);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 60px;
    height: 22px;
  }
`;