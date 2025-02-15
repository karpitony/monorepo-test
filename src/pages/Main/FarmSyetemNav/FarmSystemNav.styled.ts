import styled from 'styled-components';

interface FixedNavProps {
  isVisible: boolean;
  $isMobile: boolean;
}

export const FixedNavWrapper = styled.div<FixedNavProps>`
  position: fixed;
  top: ${({ isVisible, $isMobile }) =>
    !$isMobile ? (isVisible ? "30px" : "-50px") :(isVisible ? "20px" : "-150px")};
  right: ${({ $isMobile }) => ($isMobile ? "20px" : "50px")};
  transition: top 0.3s ease-in-out;
  z-index: 1000;
`;


export const Navbar = styled.nav<{ $isMobile: boolean }>`
  background-color: #216D35;
  padding: 10px 20px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};
`;

export const NavItem = styled.a<{ $isMobile: boolean }>`
  color: white;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "14px")};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:first-child {
    font-weight: bold;
  }
`;

export const Circle = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "4px" : "5px")};
  height: ${({ $isMobile }) => ($isMobile ? "4px" : "5px")};
  background-color: white;
  border-radius: 50%;
  margin-right: 6px;
`;

export const MobileNavbar = styled.div`
  display: inline-flex;
  height: 145px;
  padding: 16px 19px 15px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px 0px 20px 20px;
  border: 1px solid var(--FarmSystem_White, #FCFCFC);
  background: var(--FarmSystem_Green01, #28723F);
`;

export const MobileNavItem = styled.a`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  gap: 5px;
  flex: 1 0 0;
`;

export const MobileNavText = styled.p`
  color: var(--FarmSystem_White, #FCFCFC);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 160% */
  letter-spacing: -0.24px;
`;