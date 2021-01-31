import styled from '@emotion/styled'
import {Typography,Button} from '@material-ui/core'

export const SelectWrapper = styled.div`
    width: 30%;
    margin: 1rem auto;
    margin-bottom: 1rem;
    cursor: pointer;
`;
export const B = styled(Button)`
    color: #333;
`;
export const PageWrapper = styled.div`
    margin: 2%;
    padding: 2%;
`;
export const Heading = styled(Typography)`
    text-align: center;
`;
export const Loader = styled.div`
    text-align: center;
    padding: 1rem;
    display: flex;
`;
export const Spinner = styled.img`
    height: 10rem;
    margin: 1rem auto;
    animation: spinner-spin infinite 5s linear;
`;
export const PagesTitleH1 = styled.h1`
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,segoe ui, arial, sans-serif;
    margin: 0 !important;
    padding: 1rem;
    font-size: 3rem;
    @media(max-width: 767px){
        font-size: 4rem;
    }
    @media(max-width: 450px){
        font-size 3rem;
    }
`;

export const TitleSpan = styled.span`
    color: #9e1212;
    margin-left: 2px;
`;