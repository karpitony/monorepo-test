import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  width: 100vw; 
  min-width: 100%; 
  padding: 60px 0;
  text-align: center;
  overflow-x: hidden; 
  position: relative;
  z-index: 0;
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
  position: relative; /* 블러 효과 위치 */
  overflow: visible; 
  z-index: 0;

  .slick-list {
    width: 100vw;
    margin: 0;
    padding: 20px 0; 
    min-height: auto; /* 높이를 자동으로 조절 -> QA 후 일부 조정 필요 */
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

  /* 블러 효과 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 400px; //블러 영역 너비 -> 뷰 포인트에 따라 조절 필요
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  }
`;


export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
  flex-wrap: wrap;
`;

const statColors = ["#62de88", "#5ccc7e", "#50b46f", "#48a164"];

export const StatBox = styled.div<{ index: number }>`
  width: 270px;
  height: 250px;
  border-radius: 20px;
  background-color: ${({ index }) => statColors[index]}; /* 각 박스마다 다른 색상 적용 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

export const StatLabel = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;
