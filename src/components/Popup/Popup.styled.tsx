import styled from 'styled-components';


//${({ $isMobile, $isTablet }) => ($isMobile ? "280px" : $isTablet ? "330px" : "390px")}

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(113, 113, 113, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const PopupBox = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: 500px;
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "260px" : $isTablet ? "420px" : "500px")};
  background-color: #fcfcfc;
  border-radius: 15px;
  text-align: center;
  padding: ${({ $isMobile }) => ($isMobile ? "30px" : "40px")};
  z-index: 10000;
`;

export const PopupTitle = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "22px")};
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`;

export const PopupText = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: 18px;
  font-size: ${({ $isMobile, $isTablet }) => ( $isMobile ? "14px" : $isTablet ? "16px" : "18px")};
  color: black;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "14px" : "20px")};
`;

export const PopupCloseButton = styled.button<{ $isMobile: boolean; $isTablet: boolean }>`
  background-color: #28723f;
  color: #fcfcfc;
  font-size: 16px;
  padding: 10px 20px;
  padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "12px 24px" : $isTablet ? "12px 24px": "10px 20px")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);
  width: 100px;
  margin-top: 20px;
  &:hover {
    background-color: #1f5b30;
  }
`;
