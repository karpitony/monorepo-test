import ContentBox from "./ContentBox";
import * as S from './Union.styled';

export default function Union() {
  return (
    <section>
      <S.Container>
        <S.IntroduceText>
          <p>신입생이라서</p>
          <p>어떤 트랙을 선택할지 고민되나요?</p>
        </S.IntroduceText>
        <S.UnionTextContainer>
          <S.UnionText>Union</S.UnionText>
          <S.NewBadge>New</S.NewBadge>
        </S.UnionTextContainer>
        <ContentBox />
      </S.Container>
    </section>
  );
};
