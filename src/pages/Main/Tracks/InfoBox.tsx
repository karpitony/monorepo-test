import * as S from './InfoBox.styled';
import RobotArm from '@/assets/Icons/robotarm.png';
import { TrackDataInterface } from './TracksData';

interface InfoBoxProps {
  selectedTrack: TrackDataInterface;
}

export default function InfoBox({ selectedTrack }: InfoBoxProps) {
  return (
    <S.Container>
      <S.TrackNameContainer>
        <img src={RobotArm} alt="Robot Arm" style={{"width":"32px","height":"32px"}} />
        <S.TrackName>{selectedTrack.name}</S.TrackName>
      </S.TrackNameContainer>
      <S.TrackDescription>{selectedTrack.description}</S.TrackDescription>
    </S.Container>
  );
}