import styled from "styled-components";

export const Container = styled.div`
  width: 1170px;
  height: 790px;
  background: var(--FarmSystem_LightGrey);
  border-radius: 10px;
  padding: 50px 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TrackNameContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const TrackName = styled.h2`
  width: 338px;

  color: var(--FarmSystem_Green07, #175321);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TrackDescription = styled.p`
  width: 1040px;
  height: 200px;
  color: var(--FarmSystem_Black, #191919);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
`;