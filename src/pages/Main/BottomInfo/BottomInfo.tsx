import { useState } from 'react';
import * as S from './BottomInfo.styles';
import GitHubIcon from '@/assets/githubLogo2.png';
import InstagramIcon from '@/assets/InstagramLogo2.png';
import LinktreeIcon from '@/assets/LinktreeLogo.png';
import DGUIcon from "@/assets/DGULogo.png"

const BottomInfo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // 구글 폼 링크 (전화번호 입력 폼) 지금은 가상의 url 입니다.
  const googleFormLink = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  return (
    <S.BottomInfoContainer>
      <S.Title>
        <S.Highlight>Farm System</S.Highlight>을 더 알아가고 싶나요?
      </S.Title>
      
      <S.IconsContainer>
         <S.IconLink href="https://github.com/DguFarmSystem" target="_blank" rel="noopener noreferrer">
          <S.Icon src={GitHubIcon} alt="GitHub" />
        </S.IconLink>

        <S.IconLink href="https://www.instagram.com/dgu_farm_system/" target="_blank" rel="noopener noreferrer">
          <S.Icon src={InstagramIcon} alt="Instagram" />
        </S.IconLink>

        <S.IconLink href="https://linktr.ee/dgu_farm_system" target="_blank" rel="noopener noreferrer">
          <S.Icon src={LinktreeIcon} alt="Linktree" />
        </S.IconLink>

        <S.IconLink href="https://www.dongguk.edu/main" target="_blank" rel="noopener noreferrer">
          <S.Icon src={DGUIcon} alt="Community" />
        </S.IconLink>
      </S.IconsContainer>
     
      <S.RequirementsBox>
        <S.RequirementsTitle>지원 요건</S.RequirementsTitle>

        <S.RequirementItem>
          <S.RequirementTitle>🌱 누구나 환영해요!</S.RequirementTitle>
          <S.RequirementText>Farm System에 관심 있는 동국대학교 학생이라면 누구든지 참여할 수 있어요.</S.RequirementText>
        </S.RequirementItem>

        <S.RequirementItem>
          <S.RequirementTitle>⏰ 월요일 저녁, 같이 성장해요!</S.RequirementTitle>
          <S.RequirementText>매주 월요일 19시부터 약 2시간 동안 정기 모임이 열려요. 원활한 팀워크를 위해 필참이 원칙이에요! 함께 성장할 준비되셨나요? 🌱</S.RequirementText>
        </S.RequirementItem>

        <S.RequirementItem>
          <S.RequirementTitle>📅 언제 모집하나요?</S.RequirementTitle>
            <S.RequirementText>2025년 2월, Farm Sysyetem 4기를 공개 모집할 예정이에요! 조금만 기다려 주세요 😉</S.RequirementText>
        </S.RequirementItem>

        <S.ButtonContainer>
          <S.ApplyButton onClick={() => setPopupOpen(true)}>지원하기</S.ApplyButton>
        </S.ButtonContainer>

        <S.NotificationContainer>
          <S.NotificationLink href={googleFormLink} target="_blank" rel="noopener noreferrer">
            4기 모집 오픈 알림 신청 ➝
          </S.NotificationLink>
        </S.NotificationContainer>
      </S.RequirementsBox>

      {/* 팝업 -> 나중에 공용 컴포넌트로 뺄까 고민 중*/}
      {isPopupOpen && (
        <S.PopupOverlay onClick={() => setPopupOpen(false)}>
          <S.PopupBox onClick={(e) => e.stopPropagation()}>
            <S.PopupText>지금은 모집 기간이 아닙니다.</S.PopupText>
            <S.PopupText>공개 모집 예정: 2025년 2월</S.PopupText>
            <S.PopupCloseButton onClick={() => setPopupOpen(false)}>확인</S.PopupCloseButton>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
    </S.BottomInfoContainer>
  );
};

export default BottomInfo;
