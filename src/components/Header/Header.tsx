import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import * as S from './Header.styled';
import Popup from '../Popup/Popup';
import Hamburger from '../../assets/Icons/Hamburger.png';
import useMediaQueries from '@/hooks/useMediaQueries';

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet } = useMediaQueries();

  const handleNavItemClick = (path?: string) => {
    if (path) navigate(path);
    setMenuOpen(false);
  };

  return (
    <S.HeaderContainer>
      {isMobile ? (
        <S.MobileHeader>
          <S.Logo onClick={() => navigate('/')}>Farm System</S.Logo>
          <S.HamburgerIcon src={Hamburger} alt="Menu" onClick={() => setMenuOpen(true)} />
        </S.MobileHeader>
      ) : (
        <>
          <S.Logo onClick={() => navigate('/')}>Farm System</S.Logo>
          <S.NavWrapper>
            <S.Nav>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/')} 
                isActive={location.pathname === '/'}
              >
                홈
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/blog')} 
                isActive={location.pathname === '/blog'}
              >
                블로그 / 프로젝트
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => setPopupOpen(true)} 
                isActive={false}
              >
                소식
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => navigate('/FAQ')} 
                isActive={location.pathname === '/FAQ'}
              >
                FAQ
              </S.NavItem>
            </S.Nav>
          </S.NavWrapper>
          <S.FarmingLogButton onClick={() => setPopupOpen(true)}>지원하기</S.FarmingLogButton>
        </>
      )}

      <S.MobileNavWrapper $isMenuOpen={isMenuOpen}>
        {isMobile && (
          <>
            <S.MobileNav>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/')} 
                isActive={location.pathname === '/'}
              >
                홈
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/blog')} 
                isActive={location.pathname === '/blog'}
              >
                블로그 / 프로젝트
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => setPopupOpen(true)} 
                isActive={false}
              >
                소식
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => handleNavItemClick('/FAQ')} 
                isActive={location.pathname === '/FAQ'}
              >
                FAQ
              </S.NavItem>
              <S.NavItem 
                $isTablet={isTablet} 
                $isMobile={isMobile} 
                onClick={() => setPopupOpen(true)} 
                isActive={false}
              >
                지원하기
              </S.NavItem>
            </S.MobileNav>
          </>
        )}
      </S.MobileNavWrapper>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setPopupOpen(false)} 
        title={"아직 오픈되지 않았습니다."} 
        content={"오픈 예정: 2025년 4월"} 
      />
    </S.HeaderContainer>
  );
}
