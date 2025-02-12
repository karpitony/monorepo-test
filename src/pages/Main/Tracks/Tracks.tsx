import { useState } from 'react';
import * as S from './Tracks.styled';
import { TracksData } from './TracksData';
import InfoBox from './InfoBox';
import OrangeArrow from '@/assets/Icons/OrangeArrow.svg';

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(TracksData[0]);

  return (
    <S.Container>
      <S.CenterContainer>
        <S.Title>트랙 및 커리큘럼</S.Title>
        <S.GoToUnion>
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
