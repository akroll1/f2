import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

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
    width: 25%;
    margin: 1rem auto;
    margin-bottom: 10rem;
    padding: 1rem;
    background: #FFF;
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
    border-radius: 3px;
    width: 100%;
    border-radius: 5px
    padding: 1rem;
`;
export const MapDiv = styled.div`
    width: 40%;
    // padding: 1rem;
    // margin: 0.5rem auto;
    height: 100%; 
`;
export const CoverflowContainer = styled.div`
    height: 200px;
    width: 100%;
    // margin: auto;
    margin-bottom: 5rem;
    margin-top: 1.5rem;
`
export const ProfileContainer = styled.div`
    border-radius: 3px;
    width: 100%;
    height: 350px;
    margin: 0.5rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`;
export const BoxerProfile = styled.div`
    margin: 0.5rem auto;
    border: 1px solid lightgray;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 30%;
`;