import * as S from './Intro.styled.tsx';
import logo from '../../../assets/FarmLogo.png';
import { useState } from 'react';
import FarmSystemNav from '../FarmSyetemNav/FarmSystemNav.tsx';

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  return (
    <S.Container id="about">
      {/* 네비게이션을 오른쪽 정렬하기 위한 래퍼 */}
      <S.NavWrapper>
        <FarmSystemNav/>
      </S.NavWrapper>

      <S.Bud>🌱</S.Bud>
      <S.Description>
        미래를 준비하고 성장하는 여정, <br />
        Farm System에서 함께하세요.
      </S.Description>
      <S.Logo>
        <img src={logo} alt="" />
        Farm System
      </S.Logo>

      <S.TrackList>
        SW/AI 분야에 관심있는 학생들로 구성된 <a>자율 학습 동아리</a>로, <br />
        <a>Union · 게임/영상 · 보안/웹 · 사물인터넷/로봇 · 인공지능 · 빅데이터</a>의 <br />
        5가지 신기술 트랙을 제공하여 학습 경험을 통해 SW/AI 역량을 배양합니다.
      </S.TrackList>
      <S.Apply>
        <S.ApplyButton onClick={() => setPopupOpen(true)}> 지원하기 </S.ApplyButton>
        <S.ApplyDescription>2025년 2월 공개 모집 예정</S.ApplyDescription>
      </S.Apply>

      {/* 팝업 수빈님 것과 통일 */}
      {isPopupOpen && (
        <S.PopupOverlay onClick={() => setPopupOpen(false)}>
          <S.PopupBox onClick={(e) => e.stopPropagation()}>
            <S.PopupText>지금은 모집 기간이 아닙니다.</S.PopupText>
            <S.PopupText>공개 모집 예정: 2025년 2월</S.PopupText>
            <S.PopupCloseButton onClick={() => setPopupOpen(false)}>확인</S.PopupCloseButton>
          </S.PopupBox>
        </S.PopupOverlay>
      )}
    </S.Container>
  );
};

export default Intro;
