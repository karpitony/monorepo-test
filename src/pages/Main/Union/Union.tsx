import styled from "styled-components";
import ContentBox from "./ContentBox";

export default function Union() {
  return (
    <section>
      <Container>
        <IntroduceText>
          <p>신입생이라서</p>
          <p>어떤 트랙을 선택할지 고민되나요?</p>
        </IntroduceText>
        <div>
          <UnionText>Union</UnionText>
          <NewBadge>New</NewBadge>
        </div>
        <ContentBox />
      </Container>
    </section>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 1500px;

  @media (max-width: 768px) {
    padding: 20px; /* 모바일에서 여백 추가 */
    height: auto;  /* 필요에 따라 높이를 자동으로 조정 */
  }
`

const IntroduceText = styled.p`
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

  
`

const UnionText = styled.h2`
  width: 132px;
  height: 57px;

  text-align: center; 
  color: var(--FarmSystem_Orange);
  font-size: 48px;
  font-weight: 700; 

  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: auto;  /* 가로 제한 해제 */
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;  /* 더 작은 화면에서는 폰트 크기 줄이기 */
  }
`

const NewBadge = styled.div`  
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
`