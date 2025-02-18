import styled from 'styled-components';

//전체 컨테이너
export const Container = styled.div`
  position: relative; /*위치 지정에 필요*/
  max-width: 1440px;
  display: flex;
  margin: 0 auto; //중앙정렬
  padding: 0 220px; //좌우 여백
`;

//모양 유지 컨테이너
export const ActiveTabIndicator = styled.div`
  margin-top: 150px; /* 버튼(top:70px) + 버튼 높이(60px) + 여유 공간 */
  height: 500px;
  width: 100%;
  display: flex;
`;

// 버튼 컨테이너 스타일
export const ButtonContainer = styled.div`
  width: 300px;
  height: 100px;
  position: absolute;
  top: 70px;
  display: flex;
  gap: 5px;
  left: 220px;
`;


// 토글 버튼 스타일
export const ToggleButton = styled.button<{ active: boolean }>`
  margin: 0 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: ${(props) => (props.active ? '40px' : '32px')};
  font-weight: 600;
  color: ${(props) => (props.active ? 'var(--FarmSystem_Green01)' : 'var(--FarmSystem_DarkGrey)')};

  &:hover {
    color: #0077cc;
  }
`;

export const Divider = styled.div`
    padding: none;
    font-size: 64px;
    font-weight: 100;
    color: var(--FarmSystem_DarkGrey);
`;