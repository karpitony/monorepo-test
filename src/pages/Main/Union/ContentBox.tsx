import * as S from './ContentBox.styled';

export default function ContentBox() {
  return (
    <S.Container>
    <S.GradientContainer>
      <S.GradientLeft />
      <S.GradientRight />
    </S.GradientContainer>
    <S.ContentBoxBorder>
      <S.Content>
      </S.Content>
    </S.ContentBoxBorder>
    
    </S.Container>
  );
}
