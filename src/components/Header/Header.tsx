import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from './Header.styled';
import Popup from '../Popup/Popup';

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const onContainerClick = useCallback(() => {
  }, []);

  return (
    <S.HeaderContainer>
      <S.Logo onClick={() => navigate('/')}>Farm System</S.Logo>

      <S.Nav>
        <S.NavItem onClick={() => navigate('/')}>
          홈
        </S.NavItem>
        <S.NavItem onClick={() => setPopupOpen(true)}>
          블로그 / 프로젝트
        </S.NavItem>
        <S.NavItem onClick={() => setPopupOpen(true)}>
          소식
        </S.NavItem>
        <S.NavItem onClick={() => setPopupOpen(true)}>
          FAQ
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/apply')}>
          지원하기
        </S.NavItem>
      </S.Nav>

      {/* 파밍로그 버튼 */}
      <S.FarmingLogButton onClick={onContainerClick}>파밍로그</S.FarmingLogButton>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"아직 오픈되지 않았습니다."} 
        content={"오픈픈 예정: 2025년 4월"}
      />
    </S.HeaderContainer>
  );
}
