import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 1244px;
  user-select: none;

  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`;

export const CenterContainer = styled.div`
  max-width: 1170px;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`;

export const Title = styled.h2`
  width: 100%;
  padding-left: 5px;
  margin-bottom: 70px;

  color: var(--FarmSystem_Green01, #28723F);
  text-align: left;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;

  line-height: 57px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const GoToUnion = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  
  width: 100%;
  height: 36px;
  cursor: pointer;

  margin-bottom: 28px;
`;

export const GoToUnionText = styled.p`
  color: var(--FarmSystem_Black, #191919);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.24px;
`;

export const OrangeHighlight = styled.span`
  color: var(--FarmSystem_Orange);
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
`;
