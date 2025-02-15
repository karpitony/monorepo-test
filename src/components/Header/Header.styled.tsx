import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #28723f;
  letter-spacing: -0.24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #49aa59;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    color: #28723f;
  }
`;

export const FarmingLogButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #28723f;
  color: white;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);

  &:hover {
    background-color: #1f5a2f;
  }
`;

export const HamburgerIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavWrapper = styled.div<{ $isMenuOpen: boolean }>`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  height: ${({ $isMenuOpen }) => ($isMenuOpen ? "auto" : "0")};
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "1" : "0")};
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
