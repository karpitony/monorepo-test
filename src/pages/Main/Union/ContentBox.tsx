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
          <S.ContentInfoTextBox>
            <p><S.HighlightOrange>Union</S.HighlightOrange>은</p>
            <p>SW/AI 기초 역량을 다지기 위한 과정으로,</p>
            <p>트랙 구분 없이 다섯 가지 트랙의 다양한 주제에 대한</p>
            <p>SW 기본 역량을 다집니다.</p>
            <p>각 트랙의 멘토가 제공하는 프로젝트와 스터디에</p>
            <p>멘티로서 참여하게 됩니다.</p>
          </S.ContentInfoTextBox>
        </S.Content>
      </S.ContentBoxBorder>
    </S.Container>
  );
}
