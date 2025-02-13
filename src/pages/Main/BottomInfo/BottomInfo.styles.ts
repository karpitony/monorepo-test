import styled from 'styled-components';

export const BottomInfoContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  margin: 80px auto;
  text-align: center;
  padding: 60px 0;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #191919;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Highlight = styled.span`
  color: #28723f;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 40px;
`;

export const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
`;

export const RequirementsBox = styled.div`
  width: 900px;
  background-color: #e5e5e5;
  border-radius: 10px;
  padding: 50px;
  margin: 0 auto;
  text-align: left;
`;

export const RequirementsTitle = styled.h3`
  font-size: 32px;
  color: #175321;
  margin-bottom: 40px;
`;

export const RequirementItem = styled.div`
  margin-bottom: 20px;
`;

export const RequirementTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
`;

export const RequirementText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  margin-top: 40px;
`;

export const ApplyButton = styled.button`
width: 240px;
  background-color: #49aa59;
  color: #ffffff;
  font-size: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(25, 25, 25, 0.2);

  &:hover {
    background-color: #3b8a48;
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  margin-top: 10px;
  padding-right: 20px;
`;

export const NotificationLink = styled.a`
  font-size: 18px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;
    color: #28723f;
  }
`;

/* 팝업 */
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
