import styled from "styled-components";

export const Container = styled.div`
  width: 1170px;
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

  margin-bottom: 51px;
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
`;

export const Li = styled.li`
  
`;

export const ProfessorNameContainer = styled.div`
  width: 100%;
  height: 29px;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;

  margin-bottom: 20px;
`;

export const ProfessorText = styled.p`
  color: var(--FarmSystem_Green07, #175321);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfessorName = styled.p`
  color: var(--FarmSystem_Black, #191919);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 120.833% */
`;


export const ProfessorProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 38px;
`;

export const ProfessorImage = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const ProfileList = styled.ul`
  list-style-type: none;
  list-style-position: inside;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 15px;
`;

export const ProfileListItem = styled.li`
  gap: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ProfileListKey = styled.p`
  color: var(--FarmSystem_Black, #191919);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
`;

export const ProfileListValue = styled.p`
  width: 300px;
  flex-shrink: 0;
  color: var(--FarmSystem_Black, #191919);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
`;