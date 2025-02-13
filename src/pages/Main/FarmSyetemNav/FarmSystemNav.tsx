import * as S from './FarmSystemNav.styled';

export default function FarmSystemNav() {
  return (
    <S.Navbar>
      <S.NavItem href="#about">● Farm System이란?</S.NavItem>
      <S.NavItem href="#tracks">● 트랙 및 커리큘럼</S.NavItem>
      <S.NavItem href="#achievements">● 활동 및 성과</S.NavItem>
      <S.NavItem href="#eligibility">● 지원 요건</S.NavItem>
    </S.Navbar>
  );
}
