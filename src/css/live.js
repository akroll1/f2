import styled from '@emotion/styled'
import {Link} from 'react-router-dom'


export const PlayerWrapper = styled.div`

    position: relative;
    width: 100%;
    margin: 5px auto;
    text-align: center;
    height: 300px;
`;

export const PlayerWrapperPlayer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const VideoOverlayDiv = styled.div`
    // border-radius: 5px;
    // z-index: 999;
    // background: rgba(0,0,0, 0.2);
    // background-size: cover;
    position: absolute;
    min-height: 3rem;
    top: 6rem;
`;

export const VideoOverlayText = styled.h1`
  position: relative;
  z-index: 11000;
  color: #FFF;
  padding: 1rem;
  text-align: center;
  margin: auto;
  font-size: 2.5rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  @media(max-width: 768px){
    font-size: 2rem;
  }
  @media(max-width: 500px){

  }
  @media(max-width: 450px){
    width: 100%;
    font-size: 1.7rem;
  }
  @media(max-width: 425px){
    font-size: 1.5rem;
  }
`;
export const TimerDiv = styled.div`
    color: #FFF;
    width: 30%; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0rem 1rem;
    margin: auto;
    margin-bottom: -5rem;
`;
export const TimerText = styled.h2`
  color: #333;
  margin: 0;
  padding: 0.5rem;
`;
export const ScoreAndTimerDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const PageHeaderText = styled.h1`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  font-weight: ${props => props.buttonsDisabled ? `400` : `600`};
  border-radius: 3px; 
  cursor: ${props => props.buttonsDisabled ? 'unset' : 'pointer'};
  width: ${props => props.width === 4 ? `12%` : `16%`};
  border: ${props => props.buttonsDisabled ? `#950451` : `1px solid #FFF`};
  background: ${props => props.buttonsDisabled ? `#85787f` :`#c13c43`};
  color: #FFF;
  margin-right: ${props => props.width === 4 ? `0.5rem` : `0.8rem`};
  &:last-child{
    margin-right: 0px;
  } 
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 15px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  &:hover {
    background: #d60000;
    -webkit-transition: background 0.1s ease-in-out;
    -moz-transition: background 0.1s ease-in-out;
    transition: background-color 0.1s ease-in-out;
  }
  @media(max-width: 768px){
    width: ${props => props.width === 4 ? `35%` : `28%`};
  }
`;

export const PageBreak = styled.div`
  width: 50%;
  margin: 1rem 0rem;
  margin-top: 3rem;
  border-top: 3px solid #950451;
`;

export const AnswersWrapper = styled.div`
  position: absolute;
  top: 30%;
  z-index: 1000;
  pointer-events: ${props => props.buttonsDisabled ? `none` : `auto`};
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media(max-width: 767px){
    width: 90%;
    top: 30%;
  }
  @media(max-width: 550px){
    top: 20%;
  }
  @media(max-width: 500px){
    top: 20%;
  }
  @media(max-width: 425px){
    top: 15%;
  }
`;

export const TableWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 2px;
  margin-bottom: 3rem;
`;
export const Row = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  height: 2rem;
  width: 100%;
  resize: none;
  :nth-of-type(odd){
    background: #DADADA;
  }
  :nth-of-type(even){
    background: #ededed;
  }
  placeholder {
    color: #888;
  }
  &:hover {
    background: #FFF;
    cursor: pointer;
  }
  `;
export const TableText = styled.h2`
  color: #222;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

export const LeaderboardWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;
export const LeaderboardUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
export const Li = styled.li`

`;
export const ButtonWrapper = styled.div`
  margin: 1.5rem auto;
  position: absolute;
  top: 30%;
  width: 100%;
  @media(min-width: 768px){
    margin: 3rem auto;
  }
`;
export const QuestionText = styled.h2`
  width: 50%;
  background: rgba(0,0,0,0.4);
  border-radius: 5px;
  color: #FFF;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  margin: 1rem auto;
  margin-top: 1.5rem;
  top:0;
  @media(max-width: 768px){
    font-size: 1rem;
    top: 15%;
    width: 90%;
  }
`;
export const Text = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0;
`;
