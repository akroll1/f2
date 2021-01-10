import styled from '@emotion/styled'

export const FrontImage = styled.div`
    background-image: url(/boxer_in_ring.jpg);
`;
export const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
`;
export const TitleH1 = styled.h1`
    margin: 0 !important;
    padding-top: 2rem;
    font-size: 4.5rem;
`;
export const TitleH2 = styled.h2`
    height: 50px;
    padding: 0 auto;
    color: #64625d;
    text-align: center;
    letter-spacing: 1px;
`;
export const TitleSpan = styled.span`
    color: #9e1212;
    margin-left: 2px;
`;
export const HeroDiv = styled.div`
    border-top: 1px solid #9e1212;
    position: relative;
    min-height: 350px;
    background-image: url("../boxer.jpg");
    background-size: cover;
    width: 85%;
    margin: auto;
    border-radius: 5px;
    will-change: transform, opacity;
    opacity: 0.92;
`;