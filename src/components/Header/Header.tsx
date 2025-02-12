import * as S from './Header.styled.tsx';


export default function Header() {
  return (
    <S.HeaderContainer>
      <S.TextBlock>
        Farm System
      </S.TextBlock>
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
