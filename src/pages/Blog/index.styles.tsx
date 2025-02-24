import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  padding: 0 10%;
`;

// 모양 유지 컨테이너
export const ActiveTabIndicator = styled.div<{$isTablet: boolean; $isMobile: boolean;}>`
  margin-top: ${(props) => (props.$isTablet ? "200px" : props.$isMobile ? "25vh" : "200px")};
  width: 100%;
  display: flex;
  font-size: ${(props) => (props.$isMobile ? "14px" : "20px")}; 
`;

// 버튼 컨테이너 스타일
export const ButtonContainer = styled.div`
  width: 330px;
  height: 100px;
  margin: 15vh 0;
  position: absolute;
  display: inline-flex;
  justify-content: left;
  gap: 5px;
`;

// 토글 버튼 스타일
export const ToggleButton = styled.button<{ active: boolean; $isMobile: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: ${(props) => (props.active ? (props.$isMobile ? '28px' : '40px') : (props.$isMobile ? '20px' : '32px'))};
  font-weight: 600;
  color: ${(props) => (props.active ? 'var(--FarmSystem_Green01)' : 'var(--FarmSystem_DarkGrey)')};
  width: ${(props) => (props.$isMobile ? "110px": "170px")};

  padding-right: 5px;
`;
export const Divider = styled.div<{ $isMobile: boolean }>`
  margin: ${(props) => (props.$isMobile ? "0px 0px 0px 0px": "0px 0px 0px 10px")};
  font-size: ${(props) => (props.$isMobile ? '30px' : '64px')};
  font-weight: 200;
  color: var(--FarmSystem_DarkGrey);
  display: flex;
  align-items: center;
  justify-content: center;
`;