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
`;

export const NavItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #49aa59;
  cursor: pointer;
  margin-left: 30px;
  &:hover {
    color: #28723f;
  }
`;

export const NavLineActive = styled.img`
  position: absolute;
  top: 30px;
  width: 120px;
`;

export const NavLineInactive = styled.img`
  position: absolute;
  top: 30px;
  width: 120px;
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
