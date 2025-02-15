import * as S from './InfoBox.styled';
import { TrackDataInterface } from './TracksData';
import useMediaQueries from "@/hooks/useMediaQueries";

interface InfoBoxProps {
  selectedTrack: TrackDataInterface;
}

export default function InfoBox({ selectedTrack }: InfoBoxProps) {
  const { isMobile } = useMediaQueries();
  const phaseLabels = ["1학기", "여름방학", "2학기"];

  return (
    <S.Container $isMobile={isMobile}>

      {/* 트랙 이름 + 소개 */}
      <S.TrackNameContainer>
        <S.TrackName $isMobile={isMobile}>🦾  {selectedTrack.name}</S.TrackName>
      </S.TrackNameContainer>
      <S.TrackDescription $isMobile={isMobile}>{selectedTrack.description}</S.TrackDescription>
      
      {/* 트랙 학기별 커리큘럼 */}
           <S.PhasesContainer $isMobile={isMobile}>
              {Object.entries(selectedTrack.phases || {}).map(([phaseKey, phaseItems], index) => (
                <S.PhaseCard key={phaseKey} $isMobile={isMobile}>
                  <S.PhaseTitle $isMobile={isMobile}>{phaseLabels[index]}</S.PhaseTitle>
                  <S.PhaseContent $isMobile={isMobile}>
              {phaseItems.map((item, i) => (
                <S.Li $isMobile={isMobile} key={`${phaseKey}-${i}`}>&bull; {item}</S.Li>
              ))}
            </S.PhaseContent>
          </S.PhaseCard>
        ))}
      </S.PhasesContainer>

   {/* "담당 교수" 제목 */}
  <S.ProfessorNameContainer $isMobile={isMobile}>
    <S.ProfessorText $isMobile={isMobile}>담당 교수</S.ProfessorText>
  </S.ProfessorNameContainer>

  <S.ProfessorProfile $isMobile={isMobile}>
    {/* 왼쪽 섹션: 사진/이름/연락처/홈페이지 */}
    <S.ProfessorProfileContent $isMobile={isMobile}>
      <S.PhotoNameRow $isMobile={isMobile}>
        <S.ProfessorImage
          $isMobile={isMobile}
          src={selectedTrack.professorData.image}
          alt="Professor"
        />
        <S.ProfessorName $isMobile={isMobile}>
          {selectedTrack.professorData.name}
          <S.ContactList $isMobile={isMobile}>
            <S.ContactItem $isMobile={isMobile}>
              &bull; 연락처 {selectedTrack.professorData.phone}
            </S.ContactItem>
            <S.ContactItem $isMobile={isMobile}>
              &bull; 이메일 {selectedTrack.professorData.email}
            </S.ContactItem>
            <S.ContactItem $isMobile={isMobile}>
              &bull; 연구실 {selectedTrack.professorData.location}
            </S.ContactItem>
          </S.ContactList>
        </S.ProfessorName>
      </S.PhotoNameRow>

      {/* <S.HomepageButton $isMobile={isMobile}>
        홈페이지
      </S.HomepageButton> 홈페이지 안 넣는게 나을 것 같습니다! */}
    </S.ProfessorProfileContent>

    {/* 오른쪽 섹션 (예: 최종학력, 전공분야, 연구분야 등) */}
    <S.ProfessorContent $isMobile={isMobile}>
      <S.ProfileList $isMobile={isMobile}>
        <S.ProfileListItem $isMobile={isMobile}>
          <S.ProfileInfo $isMobile={isMobile}>&bull; 최종학력</S.ProfileInfo>
          <S.ProfileInfo $isMobile={isMobile}>
            {selectedTrack.professorData.education}
          </S.ProfileInfo>
        </S.ProfileListItem>
        <S.ProfileListItem $isMobile={isMobile}>
          <S.ProfileInfo $isMobile={isMobile}>&bull; 전공분야</S.ProfileInfo>
          <S.ProfileInfo $isMobile={isMobile}>
            {selectedTrack.professorData.major}
          </S.ProfileInfo>
        </S.ProfileListItem>
        <S.ProfileListItem $isMobile={isMobile}>
          <S.ProfileInfo $isMobile={isMobile}>&bull; 연구분야</S.ProfileInfo>
          <S.ProfileInfo $isMobile={isMobile}>
            {selectedTrack.professorData.research}
          </S.ProfileInfo>
        </S.ProfileListItem>
      </S.ProfileList>
    </S.ProfessorContent>
  </S.ProfessorProfile>
    </S.Container>
  );
}