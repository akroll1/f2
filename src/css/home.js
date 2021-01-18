import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const HeroContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    min-height: 50vh;
`;
export const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 3rem 1rem;
`;
export const HeroText = styled.h1`
    font-size: 3rem;
`;
export const HeroImg = styled.img`
    width: 100%;
    border-radius: 10px;
`;
export const NewsButton = styled(Link)`
    font-weight: bold;
    margin-top: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 16rem;
    font-size: 2rem;
    height: 3.5rem;
    text-decoration: none;
    background: #d22509;
    color: #FFF;
    &:hover {
        background: #ff2805;
        -webkit-transition: background 0.2s ease-in-out;
        -moz-transition: background 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        color: #FFF;
      }
`;
export const Tonight = styled.h2`
    text-align: center;
    letter-spacing: 1px;
`;
export const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
`;
export const TitleH1 = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,segoe ui, arial, sans-serif;
    margin: 0 !important;
    padding-top: 2rem;
    font-size: 6rem;
`;
export const TitleH2 = styled.h2`
    height: auto;
    padding: 0 auto;
    color: #64625d;
    text-align: center;
    letter-spacing: 1px;
    margin: 0;
`;
export const TitleSpan = styled.span`
    color: #9e1212;
    margin-left: 2px;
`;