import * as S from './InfoBox.styled';
import RobotArm from '@/assets/Icons/robotarm.png';
import { TrackDataInterface } from './TracksData';

interface InfoBoxProps {
  selectedTrack: TrackDataInterface;
}

export default function InfoBox({ selectedTrack }: InfoBoxProps) {
  const phaseLabels = ["1학기", "여름방학", "2학기"];

  return (
    <S.Container>
      <S.TrackNameContainer>
        <img src={RobotArm} alt="Robot Arm" style={{"width":"32px","height":"32px"}} />
        <S.TrackName>{selectedTrack.name}</S.TrackName>
      </S.TrackNameContainer>
      <S.TrackDescription>{selectedTrack.description}</S.TrackDescription>
      <S.PhasesContainer>
        {Object.entries(selectedTrack.phases).map(([phaseKey, phaseItems], index) => (
          <S.PhaseCard key={phaseKey}>
            <S.PhaseTitle>{phaseLabels[index]}</S.PhaseTitle>
            <S.PhaseContent>
              {phaseItems.map((item, i) => (
                <S.Li key={`${phaseKey}-${i}`}>{item}</S.Li>
              ))}
            </S.PhaseContent>
          </S.PhaseCard>
        ))}
      </S.PhasesContainer>
    </S.Container>
  );
}