import * as S from './FarmSystemNav.styled';
import { useState, useEffect } from 'react';

export default function FarmSystemNav() {
  const [isVisible, setIsVisible] = useState(false);

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
    <S.FixedNavWrapper isVisible={isVisible}>
      <S.Navbar>
        <S.NavItem href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
          <S.Circle /> Farm System이란?
        </S.NavItem>
        <S.NavItem href="#tracks" onClick={(e) => handleSmoothScroll(e, "#tracks")}>
          <S.Circle /> 트랙 및 커리큘럼
        </S.NavItem>
        <S.NavItem href="#achievements" onClick={(e) => handleSmoothScroll(e, "#achievements")}>
          <S.Circle /> 활동 및 성과
        </S.NavItem>
        <S.NavItem href="#eligibility" onClick={(e) => handleSmoothScroll(e, "#eligibility")}>
          <S.Circle /> 지원 요건
        </S.NavItem>
      </S.Navbar>
    </S.FixedNavWrapper>
  );
}