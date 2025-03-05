import React from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';
import * as S from './News.styles';


const News: React.FC = () => {
  const { isMobile} = useMediaQueries();

  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.Message $isMobile={isMobile}>아직 등록된 소식이 없어요.</S.Message>
        <a>곧 FarmSystem의 다양한 소식을 알려드릴게요!</a>
        </S.DescriptionContainer>
    </S.Container>
  );
};

export default News;