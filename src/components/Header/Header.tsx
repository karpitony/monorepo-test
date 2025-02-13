import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import * as S from './Header.styled';

export default function Header() {
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
        <S.NavItem onClick={() => navigate('/blog-project')}>
          블로그 / 프로젝트
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/news')}>
          소식
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/faq')}>
          FAQ
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/apply')}>
          지원하기
        </S.NavItem>
      </S.Nav>

      {/* 파밍로그 버튼 */}
      <S.FarmingLogButton onClick={onContainerClick}>파밍로그</S.FarmingLogButton>
    </S.HeaderContainer>
  );
}
