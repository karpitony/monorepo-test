import styled from "styled-components";
import ContentBox from "./ContentBox";

export default function Union() {
  return (
    <section>
      <Container>
        <UnionText>Union</UnionText>
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
`

const UnionText = styled.h2`
  width: 132px;
  height: 57px;

  text-align: center; 
  color: var(--FarmSystem_Orange);
  font-size: 48px;
  font-weight: 700; 

  margin-top: 70px;
  margin-bottom: 50px;
`

