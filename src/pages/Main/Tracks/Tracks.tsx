import { useState } from 'react';
import * as S from './Tracks.styled';
import { TracksData } from './TracksData';
import InfoBox from './InfoBox';
import OrangeArrow from '@/assets/Icons/OrangeArrow.svg';

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(TracksData[0]);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const offset = 80;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <S.Container id="tracks">
      <S.CenterContainer>
        <S.Title>트랙 및 커리큘럼</S.Title>
        <S.GoToUnion onClick={(e) => handleSmoothScroll(e, "#union")}>
          <S.GoToUnionText>
            트랙 선택이 고민된다면 <S.OrangeHighlight>Union</S.OrangeHighlight>으로!
          </S.GoToUnionText>
          <S.IconDiv>
            <img src={OrangeArrow} alt="Go to Union" />
          </S.IconDiv>
        </S.GoToUnion>
        <S.ButtonContainer>
          {TracksData.map((track, index) => (
            <S.TrackButton
              key={index}
              $isSelected={selectedTrack.name === track.name}
              onClick={() => setSelectedTrack(track)}
            >
              <S.TrackButtonText>{track.name}</S.TrackButtonText>
            </S.TrackButton>
          ))}
        </S.ButtonContainer>
        <InfoBox selectedTrack={selectedTrack}/>
      </S.CenterContainer>
    </S.Container>
  );
}
