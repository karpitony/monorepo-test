import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 1000px;
`;

// 상단 필터(기수·트랙)들을 감싸는 컨테이너
export const TableContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 10vh;
  min-height: 60px;
`;

export const SubDescription = styled.div`
  height: 30px;
  color: var(--FarmSystem_DarkGrey);
  font-size: 18px;
  font-weight: 400;
`;

/** 프로젝트 리스트(카드)들을 감싸는 컨테이너 */
export const ListContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  
  /* 예시로 카드 3개씩 보여주는 레이아웃 */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  
  /* 필요하다면 반응형 고려하여 media query 등 사용 */
`;

/* 비어 있을 떄 출력하는 레이아웃 잡는 컨테이너 */
export const DescriptionContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: block;
`;

/* 텍스트 컨테이너*/
export const TextContainer = styled.div`

  padding-top: 150px;
  height: 100px;
  display: flex;

  justify-content: center;
  text-align: center;

  flex-direction: column;
  color: black;
  font-size: 32px;
  font-weight: 600;

  a{
    font-size: 14px;
    font-weight: 300;
  }
  gap: 10px;
`;

