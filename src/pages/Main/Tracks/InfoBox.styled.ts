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
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px; /* 150% */
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
  font-size: 18px;
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
  width: 100%;
  color: #404040;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px; /* 120.833% */
`;


export const ProfessorProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 38px;
`;

export const ProfessorProfileContent = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfessorImage = styled.img`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 10px;
`;

export const HomepageButton = styled.a`
  background-color: #FCFCFC;
  color: #404040;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 17px;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  margin-top: 15px;
  display: inline-block;
  &:hover {
    background-color: #E1E1E1;
  }
`;

export const ProfessorContent = styled.div`
  width: 100%;
  height: 160px;
`;

export const ProfileList = styled.ul`
  list-style-type: none;
  list-style-position: inside;
  display: grid;
  grid-template-columns: 1fr 1.5fr; 
  column-gap: 30px;
  row-gap: 15px;
  margin-top: 20px;
`;

export const ProfileListItem = styled.li`
  gap: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ProfileInfo = styled.p`
  color: #635C55;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 100% */
`;

export const ProfileListKey = styled.p`
  color: var(--FarmSystem_Black, #191919);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
`;

export const ProfileListValue = styled.p`
  width: 70%;
  flex-shrink: 0;
  color: var(--FarmSystem_Black, #191919);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
`;