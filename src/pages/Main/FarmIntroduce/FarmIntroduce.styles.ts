import styled from 'styled-components';

/** 전체 컨테이너 */
export const Container = styled.div<{ $isMobile: boolean; }>`
  width: ${({ $isMobile }) => ($isMobile ? "95%" : "100%")}; /* 모바일에서 여백 증가 */
  max-width: 1200px;
  margin: 20px auto;
  padding: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};

  /* 플렉스 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
`;

/** 메인 컨텐츠 래퍼 */
export const MainContents = styled.div`
  padding-top: 5vh;
  align-self: stretch;
  max-width: 1170px;

  /* 플렉스 수직 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 100px;
`;

/** 박스 하나에 대한 공통 스타일(왼쪽/오른쪽 구분 전에) */
export const ContentBox = styled.div`
  align-self: stretch;
  background: #FCFCFC;
  border-radius: 20px;

  /* 수평 배치 */
  display: flex;
  justify-content: flex-start; /* 또는 flex-end */
  align-items: center;
  gap: 50px;
`;

/** 큰 사각형(회색) */
export const GrayBox = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background: #E5E5E5;
`;

/** 텍스트를 담는 래퍼 */
export const TextWrapper = styled.div<{ textAlign?: 'left' | 'right' }>`
  width: 790px;
  height: 400px;

  /* 폰트 스타일 */
  color: #191919;
  font-size: 32px;
  font-weight: 500;
  line-height: 60px;
  word-wrap: break-word;

  /* 오른쪽 정렬이 필요하면 props로 제어 */
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

/** 교수진 섹션 전체 래퍼 */
export const ProfessorSection = styled.div`
  align-self: stretch;
  height: 738px;
  padding: 50px 17px;
  border-radius: 10px;
  overflow: hidden;
  border: 5px #7AB784 solid;

  /* 플렉스 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

/** 섹션 헤더 텍스트 */
export const SectionTitle = styled.div`
  text-align: center;
  color: #28723F;
  font-size: 32px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

/** 교수 개별 리스트 래퍼 */
export const ProfessorList = styled.div`
  align-self: stretch;

  /* 수직 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

/** 교수 카드 */
export const ProfessorItem = styled.div`
  width: 735px;
  height: 260px;
  position: relative;
`;

/** 교수 사진(또는 placeholder) */
export const ProfessorPhoto = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 25px;
  left: 35px;
  background: #E5E5E5;
  border-radius: 8px; /* 필요에 따라 */
`;

/** 교수님 성함 */
export const ProfessorName = styled.div`
  position: absolute;
  left: 270px;
  top: 25px;
  text-align: center;

  color: #191919;
  font-size: 24px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 700;
  line-height: 29px;
  word-wrap: break-word;
`;

/** 교수 디테일 박스(직책, 연락처 등) */
export const ProfessorDetailsContainer = styled.div`
  position: absolute;
  left: 270px;
  top: 75px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

/** 교수 디테일 - 라벨 목록(직책, 연락처, 이메일 등) */
export const DetailLabels = styled.div`
  width: 117px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  /* 공통 폰트 스타일 */
  font-size: 20px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  color: #191919;
  line-height: 20px;
`;

/** 교수 디테일 - 실제 정보 목록 */
export const DetailValues = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  /* 공통 폰트 스타일 */
  font-size: 20px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  color: #191919;
  line-height: 20px;
`;

export const DetailLabel = styled.div`
  /* 직책, 연락처, 이메일 등 라벨 */
`;

export const DetailValue = styled.div`
  /* 그에 대응하는 값 */
`;

