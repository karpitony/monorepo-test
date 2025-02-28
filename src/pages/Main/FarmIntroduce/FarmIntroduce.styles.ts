import styled from 'styled-components';

/** 전체 컨테이너 */
export const Container = styled.div<{ $isMobile: boolean; }>`
  width: ${({ $isMobile }) => ($isMobile ? "95%" : "100%")}; /* 모바일에서 여백 증가 */
  max-width: 1200px;
  margin: 0px auto;
  padding: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};

  /* 플렉스 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
`;

/** 메인 컨텐츠 래퍼 */
export const MainContents = styled.div<{ $isMobile: boolean; }>`
  margin-top: ${({ $isMobile }) => ($isMobile ? "50px" : "100px")};
  align-self: stretch;
  max-width: 1170px;

  /* 플렉스 수직 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ $isMobile }) => ($isMobile ? "50px" : "100px")};
`;

/** 박스 하나에 대한 공통 스타일(왼쪽/오른쪽 구분 전에) */
export const ContentBox = styled.div<{$isMobile: boolean}>`
  width: 100%;
  background: #FCFCFC;
  border-radius: 20px;

  /* 수평 배치 */
  display: flex;
  justify-content: flex-start; /* 또는 flex-end */
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "50px")};
`;

/** 큰 사각형(회색) */
export const GrayBox = styled.img<{ $isMobile: boolean; $isTablet: boolean; }>`
  position: relative;
  border-radius: ${({ $isMobile, $isTablet }) => ($isMobile ? "10px" : $isTablet ? "15px" : "20px")};
  object-fit: cover;
  height: ${({ $isMobile, $isTablet }) => ($isMobile ? "200px" : $isTablet ? "300px" : "400px")};
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "200px" : $isTablet ? "300px" : "400px")};
`;

/** 텍스트를 담는 래퍼 */
export const TextWrapper = styled.div<{ textAlign?: 'left' | 'right'; $isMobile: boolean; $isTablet: boolean; }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "200px" : $isTablet ? "600px" : "800px")};
  height: ${({ $isMobile, $isTablet }) => ($isMobile ? "100px" : $isTablet ? "300px" : "400px")};

  /* 폰트 스타일 */
  color: #191919;
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "10px" : $isTablet ? "20px" : "30px")};
  font-weight: 400;
  line-height: ${({ $isMobile, $isTablet }) => ($isMobile ? "20px" : $isTablet ? "45px" : "60px")};
  word-wrap: break-word;

  /* 오른쪽 정렬이 필요하면 props로 제어 */
  text-align: ${({ textAlign }) => textAlign || 'left'};
  ${({ textAlign }) => ((textAlign === 'left')? "padding-left: 20px;" : "padding-right: 20px;")};
  padding-top: ${({ $isMobile, $isTablet }) => ($isMobile ? "0px" : $isTablet ? "10%" : "10%")};
`;

/** 교수진 섹션 전체 래퍼 */
export const ProfessorSection = styled.div<{ $isMobile: boolean; $isTablet: boolean; }>`
  width: 60%;
  min-width: ${({ $isMobile, $isTablet }) => ($isMobile ? "90%" : $isTablet ? "95%" : "770px")};

  max-height: 70%;
  padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "20px 20px" : $isTablet ? "50px 17px" : "50px 17px")};
  border-radius: 10px;
  border: 5px #7AB784 solid;

  /* 플렉스 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ $isMobile }) => ($isMobile ? "0px" : "40px")};
`;

/** 섹션 헤더 텍스트 */
export const SectionTitle = styled.div<{$isMobile: boolean;}>`
  text-align: center;
  color: #28723F;
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "32px")};
  font-weight: 700;
  word-wrap: break-word;
  ${({ $isMobile }) => ($isMobile ? "padding-bottom: 10px;" : "none")}
`;

/** 교수 개별 리스트 래퍼 */
export const ProfessorList = styled.div<{$isMobile: boolean;}>`
  ${({ $isMobile }) => ($isMobile ? "width: 100%" : "width: 100%")};

  /* 수직 정렬 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ $isMobile }) => ($isMobile ? "10px" : "30px")};
`;

export const ProfessorItem = styled.div<{
    $isMobile: boolean;
    $isTablet: boolean;
  }>`
    display: flex;
    flex-direction: ${({ $isMobile }) => ($isMobile ? "row" : "row")};
    width: ${({ $isMobile, $isTablet }) => ($isMobile ? "70vw" : $isTablet ? "95%" : "735px")};
    /* 모바일에서는 높이를 자동으로 늘리고, 데스크탑에서는 이미지만큼 공간 확보 */
    justify-content: space-between;
    /* 간단한 여백 (디자인에 맞춰 조절 가능) */
    padding: ${({ $isMobile }) => ($isMobile ? "0px" : "25px")};
  `;
  
  /** ProfessorPhoto
   *  - 모바일: 작게(75px)
   *  - 데스크탑: 크게(200px)
   *  - 반응형에서 position: absolute는 지양하고, margin으로 배치
   */
  export const ProfessorPhoto = styled.img<{
    $isMobile: boolean;
  }>`
    width: ${({ $isMobile }) => ($isMobile ? "75px" : "200px")};
    height: ${({ $isMobile }) => ($isMobile ? "75px" : "200px")};
    background: #e5e5e5;
    border-radius: ${({ $isMobile }) => ($isMobile ? "2px" : "8px")};
    object-fit: cover;
  
    /* 모바일일 때 오른쪽 배치*/
    display: ${({ $isMobile }) => ($isMobile ? "flex" : "flex")};
    ${({ $isMobile }) => ($isMobile ? "right: 22vw;" : "margin-right: 35px;")};
    position: relative;
    z-index: 9999;
  `;
  
  
  /** ProfessorDetailsContainer
   *  - 모바일: 사진 아래쪽에 세로로
   *  - 데스크탑: 사진 오른쪽에 가로로
   *  - 여기서는 "이름 + 상세정보"를 세로로 묶고 싶으므로 column 배치를 사용
   */
  export const ProfessorDetailsContainer = styled.div<{
    $isMobile: boolean;
  }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: ${({ $isMobile }) => ($isMobile ? "flex-start" : "flex-start")};
    /* 모바일이면 width 100%, 아니면 나머지 공간 사용 */
    width: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};
  `;
  
  /** ProfessorName
   *  - 모바일: 왼쪽 정렬
   *  - 데스크탑: 원하는 정렬 방식(여기서는 우측 정렬 예시로 제시)
   */
  export const ProfessorName = styled.div<{
    $isMobile: boolean;
  }>`
    display: flex;
    width: ${({ $isMobile }) => ($isMobile ? "150px" : "450px")};
    justify-content: ${({ $isMobile }) => ($isMobile ? "flex-start" : "flex-start")};
    text-align: center;
  
    color: #191919;
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "24px")};
    font-weight: 700;
    line-height: ${({ $isMobile }) => ($isMobile ? "20px" : "29px")};
  
    /* 여백을 약간 줘서 이름과 상세정보가 겹치지 않도록 조정 */
    margin-bottom: 10px;
  `;
  
  /** 교수 디테일 - 라벨/값 컨테이너
   *  - 모바일/데스크탑 공통: 세로 정렬 + 좌측 기준
   */
  export const DetailLabels = styled.div<{
    $isMobile: boolean;
  }>`
    width: ${({ $isMobile }) => ($isMobile ? "97px" : "117px")};
    display: flex;
    flex-direction: column;
    gap: ${({ $isMobile }) => ($isMobile ? "6px" : "15px")};
  
    font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
    font-weight: 500;
    color: var(--FarmSystem_Black);
    line-height: 20px;
  `;
  
  export const DetailValues = styled.div<{
    $isMobile: boolean;
  }>`
    width: ${({ $isMobile }) => ($isMobile ? "300px" : "300px")};
    display: flex;
    flex-direction: column;
    gap: ${({ $isMobile }) => ($isMobile ? "6px" : "15px")};
  
    font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
    font-weight: 400;
    color: var(--FarmSystem_Black);
    line-height: 20px;
  `;
  
  /** 라벨/값 각각 */
  export const DetailLabel = styled.div<{
    $isMobile: boolean;
  }>`
    padding-left: padding: ${({ $isMobile }) => ($isMobile ? "5px" : "10px")};
  `;
  export const DetailValue = styled.div<{
    $isMobile: boolean;
  }>``;
  
  /** 라벨 앞에 찍히는 점 */
  export const DetailDot = styled.span<{
    $isMobile: boolean;
  }>`
    padding: ${({ $isMobile }) => ($isMobile ? "0 0px" : "0 5px")};
  `;
  