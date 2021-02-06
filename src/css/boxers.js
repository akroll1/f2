import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const AvgRankingEl = styled.div`
    width: 100%;
    height: 0.5rem;
    border: 2px solid #ffd700;
    border-radius: 5px;
    background: #ffd700;
`;
export const Last5Link = styled.a`
    text-decoration: none;
    color: #333;
`;
export const Last5Img = styled.img`
    // position: absolute;
    // top: 0px;
    // left: 0px;
    // width: 100%;
    // height: 500%;
    // object-fit: cover;
    // object-position: center center;
    // opacity: 1;
    transition: opacity 500ms ease 5s;

    width: 100%;
    padding: 1rem auto;
    background: cover;
`;
export const Last5Publisher = styled.h6`
    position: absolute;
    bottom: 0;
    color: #bf6f6d;
`;
export const Last5Title = styled.h2`
    text-align: center;
    font-size: 1rem;
    color: #333;
`;
export const Last5Description = styled.p`
    text-align: left;
`;
export const Last5Wrapper = styled.section`
    width: 15%;
    display: inline-flex;
    flex-direction: row;
    // flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #FFF;
    padding: 0.5rem;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 0 0.05rem 0.10rem rgba(0,0,0,0.2);
    &:hover {
        background: #f1f1f1;
        opacity: 0.9;
        box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,0.2);;
    }
`;
export const Last5Container = styled.div`
    position: relative; 
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin: 1.5rem 0.5rem auto;
    width: 100%;
    padding: 1rem;
    // border: 1px solid rgba(0,0,0,0.08);
    background-color:#fff;
    // box-shadow: 0 5px 10px rgba(0,0,0,0.05);
    border-radius: 12px;
    transition: box-shadow .15s linear;
   
    @media(max-width: 767px){
        width: 70%;
    }
    @media(max-width:425px){
        width: 80%;
    }
`;
export const AvgRankDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const RankingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.5rem auto;
`;
export const BoxerPageContainer = styled.div`
    min-height: 50rem;
    display: flex;
    flex-direction: column;
`;
export const SubmitStarsButton = styled(Link)`
    font-weight: bold;
    margin-top: 0.3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 40%;
    font-size: 1.2rem;
    height: 2rem;
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
export const StarDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
`;
export const RatingContainer = styled.div`
    margin: 1rem auto;
    margin-bottom: 10rem;
    padding: 1rem;
    background: #FFF;
    margin-top: 3rem;
`;
export const RatingReviewContainer = styled.div`
    border: 1px solid #CACACA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin: 0.5rem auto;
    margin-bottom: 10rem;
    padding: 3rem;
    background: #FFF;
`;
export const ProfileP = styled.p`
    margin: 5px;
`;
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
    border-radius: 3px;
    width: 100%;
    border-radius: 5px
    padding: 1rem;
`;
export const MapDiv = styled.div`
    width: 60%;
    padding: 1rem;
    margin: 0.5rem auto;
    margin-top: 0;
    height: 100%; 
`;
export const CoverflowContainer = styled.div`
    height: 350px;
    width: 100%;
    // margin: auto;
    margin-bottom: 5rem;
    margin-top: 1.5rem;
`
export const ProfileAsideContainer = styled.div`
    overflow-y: scroll;
    height: auto;
    // padding: 0.5rem;
    background: #FFF;
    margin: 1rem auto;
    border-radius: 3px;
    width: 30%;
    // height: 350px;
    // margin: 0.5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 3rem;
`;
export const BoxerProfileContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const SocialsContainer = styled.div`
    width: 30%;

`;
export const BoxerReviewContainer = styled.div`
    height: 200px;
    width: 100%;
    margin-bottom: 10rem;
`;
export const BoxerReviewCard = styled.div`
    // width: 100%;
    border: 1px solid lightgray;
`;
export const BoxerReviewHeader = styled.div`
    min-height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid gray;
`;
export const BoxerReviewBody = styled.div`
    width: 90%;
    height: 70%;
    padding: 0.5rem;
`;
export const AvatarImg = styled.img`
    margin-left: 1rem;
    width: 100%;
    vertical-align: middle;
    width: 50px; height: 50px;
    border-radius: 50%;
`;
export const BoxerReviewerName = styled.p`
    margin: 0;
    margin-left: 1rem
`;
export const BoxerReviewText = styled.p`
    padding: 0.5rem;
`;
export const ThumbDiv = styled.div`
    padding: 0.5rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;