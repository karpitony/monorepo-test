import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(90deg, #28723F, #A2E9B8);
    padding: 50px;
    color: white;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 24px;
    line-height: 1.5;
    max-width: 600px;
    margin-bottom: 20px;
`;

export const TrackList = styled.p`
    a {    
        font-weight: 700;
    }
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 20px;
    
`;

export const Apply = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ApplyButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 20px 80px;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 20px;
    
    &:hover {
        background-color: #388E3C;
    }
`;

export const ApplyDescription = styled.div`
    font-size: 14px;
    margin-left: 20px;
    margin-top: 20px;
    color: #E8F5E9;
`;

export const Bud = styled.div`
    font-size: 64px;
    top: 116px;
    left: 100px;
`;