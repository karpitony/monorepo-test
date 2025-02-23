import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #102C19, #194326);
  color: white;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  min-height: 100vh; /* 높이를 자동으로 조정 */
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #102C19 0%, #194326 100%);
  border-radius: 20px;
  padding: 50px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-bottom: 10vw;
  margin-top: 10vw;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5vh;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 30px;
  line-height: 2;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const DescriptionText = styled.p`
  font-size: 4.3vw;
  font-weight: 300;
  color: rgb(0, 0, 0);
  text-align: center;
  margin-top: 20px;
  max-width: 700px;
  line-height: 1.6;
`;

export const greenHighlight = styled.span`
  color: #175321;
  font-weight: 800;
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.69);
  border-radius: 15px;
  padding: 20px;
  width: 80vw;
  color: white;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const Highlight = styled.p`
  font-size: 5vw;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
`;

export const FarmSystemDescription = styled.p`
  font-size: 4vw;
  font-weight: 500;
  color:rgba(255, 255, 255, 0.52);
  text-align: center;
  margin-top: 30px;
  max-width: 600px;
  line-height: 1.6;
`;

export const BottomSectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: rgb(245, 245, 245);
  text-align: center;
  margin-bottom: 50px;
`;

export const BottomSectionDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.6;
  color: #102C19;
  max-width: 600px;
  margin-bottom: 8px;
`;

export const IntroPhrase = styled.p`
  color: rgb(245, 245, 245);
  font-size: 4.5vw;
  font-weight: 600;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const AppApplyButton = styled.div`
  width: 110px;
  height: 35px;
  background-color: #28723F;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
  font-size: 13px;
  font-weight: 500;
  margin-top: 20px;
`;

export const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: ${({ $isMobile, $isTablet }) => ($isMobile ? "80vh" : $isTablet ? "100vh" : "100vh")};
  background: linear-gradient(90deg, #102C19, #194326);
  padding: ${({ $isMobile }) => ($isMobile ? "0px" : "50px")};
  color: white;
`;

export const Logo = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: flex;
  align-items: center;
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "50px" : $isTablet ? "60px" : "75px")};
  font-weight: 800;
  margin-left: ${({ $isMobile, $isTablet }) => ($isMobile || $isTablet ? "20px" : "0")};
  img {
    width: ${({ $isMobile, $isTablet }) => ($isMobile ? "100px" : $isTablet ? "140px" : "180px")};
    height: auto;
  }
`;

export const IntroDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #333;
`;

export const Description = styled.p<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "24px")};
  line-height: 1.5;
  max-width: 600px;
  margin-bottom: 20px;
  margin-left: 50px;
`;

export const TopBox = styled.div<{ $isMobile: boolean }>`
  position: absolute;
  left: 30px;
  top: ${({ $isMobile }) => ($isMobile ? "10px" : "50px")};
  display: flex;
  flex-direction: column;
`;

export const TrackList = styled.p<{ $isMobile: boolean; $isTablet: boolean}>`
  a {    
    font-weight: 600;
  }
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "15px" : $isTablet ? "20px" : "24px")};
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
`;

export const WebviewBox = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "350px":"400px")};
  background-color: rgba(229, 229, 229, 0.3); 
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ApplyBox = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: flex-end; 
  width: 100%; 
  padding: 10px 20px; 
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

export const Apply = styled.div`
  display: colunm;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
`;

export const ApplyButton = styled.button<{ $isMobile: boolean; $isTablet: boolean }>`
  background-color:rgb(74, 151, 76);
  color: white;
  border: none;
  padding: ${({ $isMobile, $isTablet }) => ($isMobile ? "8px 40px" : $isTablet ? "10px 55px" : "12px 70px")};
  border-radius: 10px;
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "20px" : "22px")};
  margin-top: 100px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #388E3C;
  }
`;

export const ApplyDescription = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "13px" : $isTablet ? "17px" : "20px")};
  margin-top: 15px;
  color: #E8F5E9;
  text-align: left;
`;

export const Bud = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "40px" : $isTablet ? "50px" : "64px")};
  margin-left: ${({ $isMobile, $isTablet }) => ($isMobile ? "30px" : $isTablet ? "40px" : "50px")};
  top: 116px;
`;
