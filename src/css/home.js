import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const VideoPublisher = styled.h6`
    position: absolute;
    bottom: 0;
    color: #bf6f6d;
`;
export const VideoTitle = styled.h2`
    text-align: center;
    font-size: 1rem;
    color: #333;
`;
export const VideoDescription = styled.p`
    text-align: left;
`;
export const VideoWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background: #FFF;
    // padding: 1rem;
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 7rem;
    width: 100%;
`;
export const VideoContainer = styled.article`
    box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,0.2);
    position: relative; 
    min-height: 400px;
    cursor: pointer;
    // display: inline-flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: center;
    margin: 1.5rem 0.5rem auto;
    width: 25%;
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.08);
    background-color:#fff;
    box-shadow: 0 5px 10px rgba(0,0,0,0.05);
    border-radius: 12px;
    transition: box-shadow .15s linear;
    &:hover {
        background: #f1f1f1;
        opacity: 0.9;
        box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,0.2);;
    }
`;
export const VideoLink = styled.a`
    text-decoration: none;
    color: #333;
`;
export const VideoImg = styled.img`
    // position: absolute;
    // top: 0px;
    // left: 0px;
    // width: 100%;
    // height: 500%;
    // object-fit: cover;
    // object-position: center center;
    // opacity: 1;
    // transition: opacity 500ms ease 0s;

    width: 100%;
    padding: 1rem auto;
    background: cover;
`;
export const HeroWrapper = styled.section`
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    min-height: 50vh;
`;
export const HeroDiv = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 3rem 1rem;
`;
export const HeroText = styled.h1`
    font-size: 3rem;
    margin: 0;
`;
export const HeroSubtext = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    color: gray;
`;
export const HeroImg = styled.img`
    box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,0.2);
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
    box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,0.2);
    &:hover {
        background: #ff2805;
        -webkit-transition: background 0.2s ease-in-out;
        -moz-transition: background 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        color: #FFF;
        box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,0.2);
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