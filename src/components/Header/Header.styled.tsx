import styled from "styled-components";

// Styled Components 정의
export const HeaderContainer = styled.header`
  display: flex;
  flex-grow: 1;
  flex-align: flex-end;
  align-items: center;
  background-color: var(--FarmSystem_White);
  padding: 0.5rem 1rem;
  width: auto;
  height: 70px;
  font-style: normal;
  padding-bottom: 0px;
  border-bottom: 4px solid var(--FarmSystem_White);
`;

export const Nav = styled.nav`
  padding-top: 40px;
  width: 600px;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-right: 420px;
  padding-bottom: 0px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex; 
  flex: 1 1 auto;
  justify-content: center;
  
  padding: 0;
  margin: 0;
  margin-left: 100px;


  li {
    color: var(--FarmSystem_Green04);
    width: 120px;
    font-weight: 400;
    font-size: 16px;
    &:hover {
      color: var(--FarmSystem_Green01);
      border-bottom: 2px solid var(--FarmSystem_Green01);
    }
    border-bottom: 2px solid var(--FarmSystem_Green04);
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;

  margin-right: 0px;
  margin-top: 5px;

  box-shadow: 0px 2px 10px 0px #19191933;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: center;
  border-radius: 10px;
  background-color: var(--FarmSystem_Green01);
  color: var(--FarmSystem_White);
  &:hover {
    background-color: #1f5a2f;
  }
`;

export const TextBlock = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #28723f;
  text-align: center;
  
  margin-top: 5px;
  margin-left: 20px;
  `
;