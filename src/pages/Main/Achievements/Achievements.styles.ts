import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  width: 100vw; 
  min-width: 100%; 
  background-color: #fcfcfc;
  padding: 60px 0;
  text-align: center;
  overflow-x: hidden; 
`;
export const Title = styled.h2`
  font-size: 48px;
  color: #191919;
  font-weight: bold;
  margin-bottom: 40px;
  margin-right:670px;
  margin-left: 90px;
  text-align: left;
`;

export const Highlight = styled.span`
  color: #28723f;
`;

export const SliderWrapper = styled.div`
  width: 100vw;
  overflow: visible; 
  
  .slick-list {
    width: 100vw;
    margin: 0;
    padding: 20px 0; 
    min-height: auto; /* 높이를 자동으로 조절 -> QA 후 일부 조정 필요요 */
  }

  .slick-track {
    display: flex;
    align-items: stretch; 
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    overflow: visible; 
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
  flex-wrap: wrap;
`;

export const StatBox = styled.div`
  width: 270px;
  height: 250px;
  border-radius: 20px;
  background-color: #62de88;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StatLabel = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
