import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 110vh;
    background-color: var(--FarmSystem_Green06);
    

`;

export const Title = styled.div<{$isMobile:boolean;}>`
    font-size: ${({$isMobile}) => ($isMobile ? "48px" : "64px")};
    color: var(--FarmSystem_Black);
    font-weight: 600;
    margin: 10px auto;
`;

export const SubTitle = styled.div<{$isMobile:boolean;}>`
    font-size: ${({$isMobile}) => ($isMobile ? "20px" : "36px")};
    color: var(--FarmSystem_LightGrey);
    padding-bottom: 1%;

`;

export const Description = styled.div<{$isMobile:boolean;}>`
    font-size: ${({$isMobile}) => ($isMobile ? "15px" : "24px")};
    color: var(--FarmSystem_LightGrey);

`;