import styled from 'styled-components';

export const MobileNavbar = styled.div`
  display: inline-flex;
  height: auto;
  padding: 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 150px;

  border-radius: 20px 0px 20px 20px;
  border: 1px solid var(--FarmSystem_White, #FCFCFC);
  background: var(--FarmSystem_Green01, #28723F);
`;

export const MobileNavItem = styled.a`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  gap: 3px;
  flex: 1 0 0;
`;

export const MobileNavText = styled.p`
  color: var(--FarmSystem_White, #FCFCFC);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

/* 확장/축소 버튼 스타일 */
export const ExpandButton = styled.button`
  color: var(--FarmSystem_White, #FCFCFC);
  font-size: 20px;
  cursor: pointer;
  width: 80%;
  border: 1px solid var(--FarmSystem_DarkGrey, #333333);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px; 

  display: flex;
  justify-content: center;
  align-items: center;
`;
