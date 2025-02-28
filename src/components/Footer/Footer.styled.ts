import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 13vh;
    background-color: var(--FarmSystem_LightGrey);
`;

export const FooterContent = styled.div<{ $isMobile: boolean}>`

  display: flex;
  justify-content: ${({ $isMobile }) => ($isMobile ? "center" : "space-between")};
  align-items: center;

  padding: 15px 30px;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: var(--FarmSystem_Green06);

  display: flex;
  flex-direction: row;
`;

export const FooterDescription = styled.div`
  font-weight: 300;
  line-height: 22px;
  font-size: 16px;
`;




export const IconsContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  display: flex;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "30px" : "10px")};
  width: 200px;
  margin-right: 0px; 
`;

export const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s ease-in-out;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--FarmSystem_DarkGrey);
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img<{ $isMobile: boolean}>`
  width: ${({ $isMobile }) => ($isMobile ? "10px" : "25px")};
  height: ${({ $isMobile }) => ($isMobile ? "10px" : "25px")};
  object-fit: cover;
`;

export const Logo = styled.img<{ $isMobile: boolean}>`
  width: ${({ $isMobile }) => ($isMobile ? "30px" : "35px")};
  height: ${({ $isMobile }) => ($isMobile ? "30px" : "35px")};
  object-fit: cover;
`;