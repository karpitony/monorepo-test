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

      {/* 트랙 이름 + 소개개 */}
      <S.TrackNameContainer>
        <img src={RobotArm} alt="Robot Arm" style={{"width":"32px","height":"32px"}} />
        <S.TrackName>{selectedTrack.name}</S.TrackName>
      </S.TrackNameContainer>
      <S.TrackDescription>{selectedTrack.description}</S.TrackDescription>
      
      {/* 트랙 학기별 커리큘럼 */}
      <S.PhasesContainer>
        {Object.entries(selectedTrack.phases).map(([phaseKey, phaseItems], index) => (
          <S.PhaseCard key={phaseKey}>
            <S.PhaseTitle>{phaseLabels[index]}</S.PhaseTitle>
            <S.PhaseContent>
              {phaseItems.map((item, i) => (
                <S.Li key={`${phaseKey}-${i}`}>&bull; {item}</S.Li>
              ))}
            </S.PhaseContent>
          </S.PhaseCard>
        ))}
      </S.PhasesContainer>

      {/* 담당 교수 정보 */}
      <S.ProfessorNameContainer>
        <S.ProfessorText>담당 교수</S.ProfessorText>
        
      </S.ProfessorNameContainer>
      <S.ProfessorProfile>
        <S.ProfessorProfileContent>
          <S.ProfessorImage src={selectedTrack.professorData.image} alt="Professor" />
          <S.HomepageButton>홈페이지</S.HomepageButton>
        </S.ProfessorProfileContent>
        
        <S.ProfessorContent>
          <S.ProfessorName>{selectedTrack.professorData.name}</S.ProfessorName>

          <S.ProfileList>
            <S.ProfileListItem>
              <S.ProfileInfo>&bull; 연락처</S.ProfileInfo>
              <S.ProfileInfo>{selectedTrack.professorData.phone}</S.ProfileInfo>
            </S.ProfileListItem>
            <S.ProfileListItem>
              <S.ProfileListKey>&bull; 최종학력</S.ProfileListKey>
              <S.ProfileListValue>{selectedTrack.professorData.education}</S.ProfileListValue>
            </S.ProfileListItem>
            <S.ProfileListItem>
              <S.ProfileInfo>&bull; 이메일</S.ProfileInfo>
              <S.ProfileInfo>{selectedTrack.professorData.email}</S.ProfileInfo>
            </S.ProfileListItem>
            <S.ProfileListItem>
              <S.ProfileListKey>&bull; 전공분야</S.ProfileListKey>
              <S.ProfileListValue>{selectedTrack.professorData.major}</S.ProfileListValue>
            </S.ProfileListItem>
            <S.ProfileListItem>
              <S.ProfileInfo>&bull; 연구실</S.ProfileInfo>
              <S.ProfileInfo>{selectedTrack.professorData.location}</S.ProfileInfo>
            </S.ProfileListItem>
            <S.ProfileListItem>
              <S.ProfileListKey>&bull; 연구분야</S.ProfileListKey>
              <S.ProfileListValue>{selectedTrack.professorData.research}</S.ProfileListValue>
            </S.ProfileListItem>
          </S.ProfileList>
        </S.ProfessorContent>
      </S.ProfessorProfile>
    </S.Container>
  );
}