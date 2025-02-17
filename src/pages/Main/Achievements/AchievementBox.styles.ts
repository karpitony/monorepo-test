import styled from 'styled-components';

export const StatsContainer = styled.div<{ $isMobile: boolean }>`
  width: "80%";
  display: flex;
  justify-content: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "30px")};
  margin-top: ${({ $isMobile }) => ($isMobile ? "40px" : "60px")};
  flex-wrap: wrap;
  padding-left: 30px;
  padding-right: 30px;
`;

const statColors = ["#62de88", "#5ccc7e", "#50b46f", "#48a164"];

export const StatBox = styled.div<{ index: number; $isMobile: boolean; $isTablet: boolean; $isApp: boolean}>`
  width: ${({ $isApp, $isMobile, $isTablet }) => ($isApp ? "120px" : $isMobile ? "140px" : $isTablet ? "220px" : "270px")};
  height: ${({ $isApp, $isMobile, $isTablet }) => ($isApp ? "120px" : $isMobile ? "140px" : $isTablet ? "220px" : "250px")};
  border-radius: 20px;
  background-color: ${({ index }) => statColors[index]}; /* 각 박스마다 다른 색상 적용 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatNumber = styled.div<{ $isApp: boolean; $isMobile: boolean }>`
  font-size: ${({ $isApp, $isMobile }) => ($isApp ? "22px" : $isMobile ? "32px" : "48px")};
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

export const StatLabel = styled.div<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
  font-weight: 500;
  color: #fff;
`;
