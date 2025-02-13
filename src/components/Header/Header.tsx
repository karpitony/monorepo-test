import * as S from './Header.styled.tsx';


export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Navbar>
        <S.NavItem href="#">● Farm System이란?</S.NavItem>
        <S.NavItem href="#">● 트랙 및 커리큘럼</S.NavItem>
        <S.NavItem href="#">● 활동 및 성과</S.NavItem>
        <S.NavItem href="#">● 지원 요건</S.NavItem>
      </S.Navbar>
      <S.Nav>
        <S.NavList>
          <li><a href="#home">홈</a></li>
          <li><a href="#about">블로그 / 프로젝트</a></li>
          <li><a href="#tracks">소식</a></li>
          <li><a href="#contact">FAQ</a></li>
          <li><a href="#contact">지원하기</a></li>
        </S.NavList>
      </S.Nav>
      <S.Button>
        파밍로그
      </S.Button>
    </S.HeaderContainer>

  );
}