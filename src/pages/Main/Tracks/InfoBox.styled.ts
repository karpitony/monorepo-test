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

export const PhasesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const PhaseCard = styled.div`
  display: flex;
  width: 300px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;

  border-radius: 20px;
  background: var(--FarmSystem_White, #FCFCFC);
`;

export const PhaseTitle = styled.h3`
  color: var(--FarmSystem_Green07, #175321);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 11px;
`;

export const PhaseContent = styled.ul`
  display: flex;
  width: 260px;
  height: 170px;
  flex-direction: column;
  justify-content: center;

  color: var(--FarmSystem_Black, #191919);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  list-style-type: disc;
  list-style-position: inside;
`;

export const Li = styled.li`
  padding-left: 10px;
`;