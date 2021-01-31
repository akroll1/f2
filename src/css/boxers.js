import styled from '@emotion/styled'

export const BoxerLabel = styled.label`
    background: rgba(0,0,0, 0.5);
    color: #FFF;
    font-weight: 500;
    border-radius: 3px;
    padding: 5px;
    width: auto;
    position: absolute;
    bottom: 2rem;
`;
export const ProfileImgDiv = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ProfileImg = styled.img`
    width: 100%;
    border-radius: 5px
    padding: 1rem;
`;
export const MapDiv = styled.div`
    width: 40%;
    padding: 1rem;
    margin: 0.5rem auto;
    height: 100%; 
`;
export const CoverflowContainer = styled.div`
    height: 200px;
    width: 100%;
    margin: auto;
    margin-bottom: 5rem;
`
export const ProfileContainer = styled.div`
    width: 100%;
    height: 350px;
    margin: 0.5rem auto;
    display: flex;
    flex-direction: row;
    // flex-basis: 1 0 auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
`;
export const BoxerProfile = styled.div`
    margin: 0.5rem auto;
    border: 1px solid lightgray;
    padding: 1rem;
    display: flex;
    // flex: 1 0 auto;
    flex-direction: column;
    width: 30%;
`;