import styled from 'styled-components';

interface FixedNavProps {
  isVisible: boolean;
}

export const FixedNavWrapper = styled.div<FixedNavProps>`
  position: fixed;
  top: ${({ isVisible }) => (isVisible ? "10px" : "-50px")};
  right: 20px;
  transition: top 0.3s ease-in-out;
  z-index: 1000;
`;

export const Navbar = styled.nav`
  background-color: #216D35;
  padding: 10px 20px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItem = styled.a`
  color: white;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:first-child {
    font-weight: bold;
  }
`;

export const Circle = styled.div`
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 50%;
  margin-right: 8px;
`;
