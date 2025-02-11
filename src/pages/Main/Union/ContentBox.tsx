import styled from "styled-components";

export default function ContentBox() {
  return (
    <ContentBoxBorder>
      <Content>
      </Content>
    </ContentBoxBorder>
  );
}

const ContentBoxBorder = styled.div`
  width: 700px;
  height: 500px;
  background: linear-gradient(
    90deg,
    var(--FarmSystem_Orange) 0%,
    var(--FarmSystem_Green02) 100%
  );
  padding: 5px;
  border-radius: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--FarmSystem_White);
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`