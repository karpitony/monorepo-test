import styled from 'styled-components';

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: ${({ $isMobile, $isTablet }) => ($isMobile ? "80vh" : $isTablet ? "100vh" : "110vh")};
    background: ${({ $isMobile }) => (
        $isMobile ? "linear-gradient(90deg, #28723F, #75e298)" 
        : "linear-gradient(90deg, #28723F, #A2E9B8)"
    )};
    padding: ${({ $isMobile }) => ($isMobile ? "0px" : "50px")};
    color: white;
`;

/* 추가된 네비게이션 정렬용 스타일 */
export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end; /* 오른쪽 정렬 */
    margin-bottom: 20px;
`;

export const Logo = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    display: flex;
    align-items: center;
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "40px" : $isTablet ? "50px" : "64px")};
    font-weight: 800;
    margin-bottom: 20px;
    margin-left: 50px;
    img {
        width: ${({ $isMobile, $isTablet }) => ($isMobile ? "100px" : $isTablet ? "140px" : "180px")};
        height: auto;
    }
`;

export const Description = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "24px")};
    line-height: 1.5;
    max-width: 600px;
    margin-bottom: 20px;
    margin-left: 50px;
`;

export const TrackList = styled.p<{ $isMobile: boolean; $isTablet: boolean, $isTiny: boolean}>`
    a {    
        font-weight: 600;
    }
    font-size: ${({ $isTiny, $isMobile, $isTablet }) => ($isTiny ? "12px" : $isMobile ? "15px" : $isTablet ? "20px" : "24px")};
    line-height: 1.5;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
`;

export const Apply = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
`;

export const ApplyButton = styled.button<{ $isMobile: boolean; $isTablet: boolean }>`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "10px 50px" : $isTablet ? "12px 65px" : "15px 80px")};
    border-radius: 10px;
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "18px" : $isTablet ? "22px" : "24px")};
    margin-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    
    &:hover {
        background-color: #388E3C;
    }
`;


export const ApplyDescription = styled.div`
    font-size: 16px;
    margin-left: 20px;
    margin-top: 15px;
    color: #E8F5E9;
`;

export const Bud = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
    font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "40px" : $isTablet ? "50px" : "64px")};
    margin-left: ${({ $isMobile, $isTablet }) => ($isMobile ? "30px" : $isTablet ? "40px" : "50px")};
    top: 116px;
`;

/* 팝업 스타일 */
export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(113, 113, 113, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupBox = styled.div`
  width: 500px;
  background-color: #fcfcfc;
  border: 3px solid #28723f;
  border-radius: 15px;
  text-align: center;
  padding: 40px;
`;

export const PopupText = styled.p`
  font-size: 20px;
  color: black;
  margin-bottom: 20px;
`;

export const PopupCloseButton = styled.button`
  background-color: #28723f;
  color: #fcfcfc;
  font-size: 16px;
  padding: 10px 20px;
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
