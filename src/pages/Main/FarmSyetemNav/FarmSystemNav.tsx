import * as S from './FarmSystemNav.styled';
import { useState, useEffect } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';

export default function FarmSystemNav() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile } = useMediaQueries();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <S.FixedNavWrapper isVisible={isVisible} $isMobile={isMobile}>
      {isMobile ? (
        <S.MobileNavbar>
          <S.MobileNavItem href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
            <S.MobileNavText> Farm System이란?</S.MobileNavText>
          </S.MobileNavItem>
          <S.MobileNavItem href="#tracks" onClick={(e) => handleSmoothScroll(e, "#tracks")}>
            <S.MobileNavText> 트랙 및 커리큘럼</S.MobileNavText>
          </S.MobileNavItem>
          <S.MobileNavItem href="#achievements" onClick={(e) => handleSmoothScroll(e, "#achievements")}>
            <S.MobileNavText> 활동 및 성과</S.MobileNavText>
          </S.MobileNavItem>
          <S.MobileNavItem href="#eligibility" onClick={(e) => handleSmoothScroll(e, "#eligibility")}>
            <S.MobileNavText> 지원 요건</S.MobileNavText>
          </S.MobileNavItem>
        </S.MobileNavbar>
      ) : (
        <S.Navbar $isMobile={isMobile}>
          <S.NavItem $isMobile={isMobile} href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
            <S.Circle $isMobile={isMobile} /> Farm System이란?
          </S.NavItem>
          <S.NavItem $isMobile={isMobile} href="#tracks" onClick={(e) => handleSmoothScroll(e, "#tracks")}>
            <S.Circle $isMobile={isMobile} /> 트랙 및 커리큘럼
          </S.NavItem>
          <S.NavItem $isMobile={isMobile} href="#achievements" onClick={(e) => handleSmoothScroll(e, "#achievements")}>
            <S.Circle $isMobile={isMobile} /> 활동 및 성과
          </S.NavItem>
          <S.NavItem $isMobile={isMobile} href="#eligibility" onClick={(e) => handleSmoothScroll(e, "#eligibility")}>
            <S.Circle $isMobile={isMobile} /> 지원 요건
          </S.NavItem>
        </S.Navbar>
      )}
    </S.FixedNavWrapper>
  );
}
