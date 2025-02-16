import * as S from './InfoBox.styled';
import { TrackDataInterface } from './TracksData';
import useMediaQueries from "@/hooks/useMediaQueries";
import Call from "../../../assets/Icons/Call.png";
import Location from "../../../assets/Icons/Location.png";
import mail from "../../../assets/Icons/mail.png";

interface InfoBoxProps {
  selectedTrack: TrackDataInterface;
}

export default function InfoBox({ selectedTrack }: InfoBoxProps) {
  const { isMobile, isDesktop, isTablet } = useMediaQueries();
  const phaseLabels = ["1학기", "여름방학", "2학기"];

  return (
    <S.Container $isMobile={isMobile}>

      {/* 트랙 이름 + 소개 */}
      <S.TrackNameContainer>
        <S.TrackName $isMobile={isMobile}>🦾 {selectedTrack.name}</S.TrackName>
      </S.TrackNameContainer>
      <S.TrackDescription $isMobile={isMobile}>{selectedTrack.description}</S.TrackDescription>
      
      {/* 트랙 학기별 커리큘럼 */}
           <S.PhasesContainer $isMobile={isMobile}>
              {Object.entries(selectedTrack.phases || {}).map(([phaseKey, phaseItems], index) => (
                <S.PhaseCard key={phaseKey} $isDesktop={isDesktop}>
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

  <S.ProfessorProfile $isDesktop={isDesktop} $isMobile={isMobile}>
  {/* 왼쪽 섹션: 교수 사진/이름/연락처 */}
  <S.ProfessorProfileContent $isDesktop={isDesktop}>
    <S.PhotoNameRow $isMobile={isMobile}>
      <S.ProfessorImage
        $isMobile={isMobile}
        src={selectedTrack.professorData.image}
        alt="Professor"
      />
      <div>
        <S.ProfessorName $isMobile={isMobile}>
          {selectedTrack.professorData.name}
        </S.ProfessorName>

        <S.ContactList $isMobile={isMobile}>
                <S.ContactItem $isMobile={isMobile}>
          <img
src={Call}
    alt="Phone Icon"
    style={{ width: "15px", height: "15px", marginRight: "3px" }}/>
            {selectedTrack.professorData.phone}
                </S.ContactItem>
                <S.ContactItem $isMobile={isMobile}>
                  <img
src={mail}
    alt="mail Icon"
    style={{ width: "15px", height: "15px", marginRight: "3px" }}/>
            {selectedTrack.professorData.email}
                </S.ContactItem>
             
                <S.ContactItem $isMobile={isMobile}>
                  <img
src={Location}
    alt="Lab Icon"
    style={{ width: "15px", height: "15px", marginRight: "3px" }}/>   
            {selectedTrack.professorData.location}
          </S.ContactItem>
        </S.ContactList>
      </div>
    </S.PhotoNameRow>

    {/* 홈페이지 버튼은 사용하지 않을 경우 주석 처리 또는 삭제 */}
    {/*
    <S.HomepageButton $isMobile={isMobile}>
      홈페이지
    </S.HomepageButton>
    */}
  </S.ProfessorProfileContent>

  <S.ProfileContainer $isDesktop={isDesktop} $isMobile={isMobile} $isTablet={isTablet}>
    <S.ProfileLabel $isMobile={isMobile}>최종학력</S.ProfileLabel>
    <S.ProfileValue $isMobile={isMobile}>{selectedTrack.professorData.education}</S.ProfileValue>

    <S.ProfileLabel $isMobile={isMobile}>전공분야</S.ProfileLabel>
    <S.ProfileValue $isMobile={isMobile}>{selectedTrack.professorData.major}</S.ProfileValue>

    <S.ProfileLabel $isMobile={isMobile}>연구분야</S.ProfileLabel>
    <S.ProfileValue $isMobile={isMobile}>{selectedTrack.professorData.research}</S.ProfileValue>
  </S.ProfileContainer>
</S.ProfessorProfile>
    </S.Container>
  );
}