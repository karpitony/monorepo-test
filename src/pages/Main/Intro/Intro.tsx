import * as S from './Intro.styled.tsx';
import logo from '../../../assets/FarmLogo.png';
import { useState } from 'react';
import Popup from '@/components/Popup/Popup.tsx';
import useMediaQueries from '@/hooks/useMediaQueries.ts';

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isTiny, isMobile, isTablet } = useMediaQueries();
  
  return (
    <S.Container id="about" $isMobile={isMobile} $isTablet={isTablet}>
      <S.Bud $isMobile={isMobile} $isTablet={isTablet}>🌱</S.Bud>
      <S.Description $isMobile={isMobile} $isTablet={isTablet}>
        미래를 준비하고 성장하는 여정, <br />
        Farm System에서 함께하세요.
      </S.Description>
      <S.Logo $isMobile={isMobile} $isTablet={isTablet}>
        <img src={logo} alt="" />
        Farm System
      </S.Logo>
      
      <S.TrackList $isTiny={isTiny} $isMobile={isMobile} $isTablet={isTablet}>
        SW/AI 분야에 관심있는 학생들로 구성된 <a>자율 학습 동아리</a>로, <br />
        <a>Union · 게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</a>의 <br />
        5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
      </S.TrackList>
      
      <S.Apply>
        <S.ApplyButton $isMobile={isMobile} $isTablet={isTablet} onClick={() => setPopupOpen(true)}> 지원하기 </S.ApplyButton>
        <S.ApplyDescription>2025년 2월 공개 모집 예정</S.ApplyDescription>
      </S.Apply>
      
      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"지금은 모집 기간이 아닙니다."} 
        content={"공개 모집 예정: 2025년 2월"} 
      />
    </S.Container>
  );
};

export default Intro;