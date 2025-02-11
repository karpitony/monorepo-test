import styled from "styled-components";

export const Container = styled.div`
  width: 100%
  heigh: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative

`

export const ContentBoxBorder = styled.div`
  position: absolute;
  top: 0px;

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
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--FarmSystem_White);
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GradientContainer = styled.div`
  position: absolute;
  top: 0px;

  height: 500px;
  display: flex;  
  gap: 80px; 
  justify-content: center; 
  align-items: center; 
`

export const GradientLeft = styled.div`
  width: 560px;
  height: 400px;
  background: linear-gradient(270deg, var(--FarmSystem_Orange) 50%, var(--FarmSystem_White) 100%);
  opacity: 0.5;
  border-radius: 20px;
`;

export const GradientRight = styled.div`
  width: 560px;
  height: 400px;
  background: linear-gradient(90deg, var(--FarmSystem_Green02) 50%, var(--FarmSystem_White) 100%);
  opacity: 0.5;
  border-radius: 20px;
`;