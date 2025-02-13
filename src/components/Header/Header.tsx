import { useCallback } from 'react';
import * as S from './Header.styled';

export default function Header() {
  const onContainerClick = useCallback(() => {
  }, []);

  return (
    <S.HeaderContainer>
      <S.Logo>Farm System</S.Logo>

      <S.Nav>
        <S.NavItem href="/">
          홈
        </S.NavItem>
        <S.NavItem href="/blog">
          블로그 / 프로젝트
        </S.NavItem>
        <S.NavItem href="/news">
          소식
        </S.NavItem>
        <S.NavItem href="/faq" onClick={onContainerClick}>
          FAQ
        </S.NavItem>
        <S.NavItem href="/apply">
          지원하기
        </S.NavItem>
      </S.Nav>

      {/* 파밍로그 버튼 */}
      <S.FarmingLogButton onClick={onContainerClick}>파밍로그</S.FarmingLogButton>
    </S.HeaderContainer>
  );
}
