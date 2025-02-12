import * as S from './InfoBox.styled';
import RobotArm from '@/assets/Icons/robotarm.png';
import { TrackDataInterface } from './TracksData';

interface InfoBoxProps {
  selectedTrack: TrackDataInterface;
}

export default function InfoBox({ selectedTrack }: InfoBoxProps) {
  return (
    <S.Container>
      <img src={RobotArm} alt="Robot Arm" />
      <h3>{selectedTrack.name}</h3>
    </S.Container>
  );
}