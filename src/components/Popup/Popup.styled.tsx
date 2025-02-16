import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(113, 113, 113, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const PopupBox = styled.div`
  width: 500px;
  background-color: #fcfcfc;
  border: 3px solid #28723f;
  border-radius: 15px;
  text-align: center;
  padding: 40px;
  z-index: 10000;
`;

export const PopupTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`;

export const PopupText = styled.p`
  font-size: 18px;
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
