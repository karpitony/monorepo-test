import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 110vh;
    background: linear-gradient(90deg, #28723F, #A2E9B8);
    padding: 50px;
    color: white;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 64px;
    font-weight: 800;

    margin-bottom: 20px;
    margin-left: 100px;
`;

export const Description = styled.p`
    font-size: 24px;
    line-height: 1.5;
    max-width: 600px;

    margin-bottom: 20px;
    margin-left: 100px;
`;

export const TrackList = styled.p`
    a {    
        font-weight: 600;
    }
    font-size: 24px;
    line-height: 1.5;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 100px;
    
`;

export const Apply = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 100px;
`;

export const ApplyButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 20px 80px;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 20px;
    
    &:hover {
        background-color: #388E3C;
    }
`;

export const ApplyDescription = styled.div`
    font-size: 16px;
    margin-left: 20px;
    margin-top: 20px;
    color: #E8F5E9;
`;

export const Bud = styled.div`
    margin-left: 100px;
    font-size: 64px;
    top: 116px;
    left: 100px;
`;


/* 팝업 -> 수빈님 것과 통일  */
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