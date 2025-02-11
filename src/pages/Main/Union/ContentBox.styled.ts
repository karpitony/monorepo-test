import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 0;
  }
`;

export const ContentBoxBorder = styled.div`
  position: absolute;
  top: 0;
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
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--FarmSystem_White);
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentInfoTextBox = styled.div`
  width: 600px;
  height: 210px;
  color: var(--FarmSystem_Black);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const HighlightOrange = styled.span`
  font-weight: 700;
  color: var(--FarmSystem_Orange);
`;

export const ActivityTitle = styled.h3`
  width: 149px;
  height: 38px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: var(--FarmSystem_Green01);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 17px;

  @media (max-width: 768px) {
    width: auto;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ActivityList = styled.ul`
  width: 577px;
  height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: flex-start;
  padding: 0;
  gap: 10px 20px;
  list-style-type: disc;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    justify-content: center;
  }
`;

export const Li = styled.li`
  height: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: var(--FarmSystem_Black);
  list-style-type: disc;
  list-style-position: outside;
  margin-left: 40px;
  text-align: center;

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const GradientContainer = styled.div`
  position: absolute;
  top: 0;
  height: 500px;
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GradientLeft = styled.div`
  width: 560px;
  height: 400px;
  background: linear-gradient(
    270deg,
    var(--FarmSystem_Orange) 50%,
    var(--FarmSystem_White) 100%
  );
  opacity: 0.5;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 300px;
    height: 250px;
  }
`;

export const GradientRight = styled.div`
  width: 560px;
  height: 400px;
  background: linear-gradient(
    90deg,
    var(--FarmSystem_Green02) 50%,
    var(--FarmSystem_White) 100%
  );
  opacity: 0.5;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 300px;
    height: 250px;
  }
`;
