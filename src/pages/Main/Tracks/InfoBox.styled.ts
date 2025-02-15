import styled from "styled-components";

export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1170px;
  background: var(--FarmSystem_LightGrey);
  border-radius: 10px;
  padding: ${({ $isMobile }) => ($isMobile ? "30px 20px" : "50px 60px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TrackNameContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const TrackName = styled.h2<{ $isMobile: boolean }>`
  width: 338px;

  color: var(--FarmSystem_Green07, #175321);
  font-size: ${({ $isMobile }) => ($isMobile ? "24px" : "32px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
`;

export const TrackDescription = styled.p<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1040px;
  height: 200px;
  color: var(--FarmSystem_Black, #191919);
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "19px")};
  font-style: normal;
  font-weight: 300;
  line-height: ${({ $isMobile }) => ($isMobile ? "30px" : "35px")}; /* 150% */
`;

export const PhasesContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 51px;
  flex-wrap: wrap;
`;

export const PhaseCard = styled.div<{ $isMobile: boolean }>`
  display: flex;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "300px")};
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  border-radius: 20px;
  background: var(--FarmSystem_White, #FCFCFC);
`;

export const PhaseTitle = styled.h3<{ $isMobile: boolean }>`
  color: var(--FarmSystem_Green07, #175321);
  text-align: center;
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "24px")};
  font-weight: 700;
  line-height: normal;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "0px" : "11px")};
  font-style: normal;
`;

export const PhaseContent = styled.ul<{ $isMobile: boolean }>`
  display: flex;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "150px" : "170px")};
  flex-direction: column;
  justify-content: center;
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "18px")};
  color: var(--FarmSystem_Black, #191919);
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
`;

export const Li = styled.li<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
  color: var(--FarmSystem_Black, #191919);
`;


/** 전체를 감싸는 컨테이너 (기존 S.Container가 있다고 가정) */
// export const Container = styled.div` ... `;
// 이미 프로젝트 내에 S.Container가 있으시면 그대로 사용하세요.

/** "담당 교수" 제목 + 아래 컨텐츠를 감싸는 영역 */
export const ProfessorNameContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "10px" : "15px")};
`;

/** "담당 교수" 텍스트 */
export const ProfessorText = styled.p<{ $isMobile: boolean }>`
  color: var(--FarmSystem_Green07, #175321);
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "24px")};
  font-weight: 700;
  margin: 0;
  text-align: left;
`;

/** 전체 레이아웃을 좌우 2개 컬럼(왼쪽: 사진/이름/연락처, 오른쪽: 학력/전공/연구)으로 배치 */
export const ProfessorProfile = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ $isMobile }) => ($isMobile ? "20px" : "30px")};
  width: 100%;
`;

/** 왼쪽 컬럼(사진/이름/연락처/홈페이지) */
export const ProfessorProfileContent = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "60%")};
`;

/** 교수 사진 + 이름을 가로로 배치하는 컨테이너 */
export const PhotoNameRow = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  align-items: ${({ $isMobile }) => ($isMobile ? "center" : "flex-start")};
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
  margin-bottom: 15px;
`;

/** 교수 사진 */
export const ProfessorImage = styled.img<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "90px" : "120px")};
  height: ${({ $isMobile }) => ($isMobile ? "90px" : "120px")};
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

/** 교수 이름 */
export const ProfessorName = styled.p<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "22px")};
  font-weight: 700;
  color: #404040;
  margin: 0;
`;

/** 연락처/이메일/연구실을 나열하는 리스트 */
export const ContactList = styled.ul<{ $isMobile: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
  display: flex;
  flex-direction: column;
  gap: ${({ $isMobile }) => ($isMobile ? "6px" : "8px")};
`;

/** 연락처/이메일/연구실 각각의 아이템 */
export const ContactItem = styled.li<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
  color: #635c55;
  display: flex;
  align-items: center;
  gap: 6px;
`;

/** 홈페이지 버튼 */
export const HomepageButton = styled.a<{ $isMobile: boolean }>`
  width: fit-content;
  background-color: #fcfcfc;
  color: #404040;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "14px")};
  font-weight: 600;
  padding: ${({ $isMobile }) => ($isMobile ? "4px 12px" : "6px 16px")};
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e1e1e1;
  }
`;

/** 오른쪽 컬럼(최종학력/전공분야/연구분야) */
export const ProfessorContent = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "35%")};
`;

/** 오른쪽 리스트(최종학력, 전공분야, 연구분야) */
export const ProfileList = styled.ul<{ $isMobile: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ $isMobile }) => ($isMobile ? "8px" : "10px")};
`;

/** 오른쪽 리스트 아이템 */
export const ProfileListItem = styled.li<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  gap: 6px;
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
  color: #635c55;
`;

/** 불릿/라벨( ex: &bull; 최종학력 ) */
export const ProfileInfo = styled.p<{ $isMobile: boolean }>`
  margin: 0;
`;
