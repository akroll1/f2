import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const ChatButton = styled.button`
    font-weight: bold;
    margin-top: 0.3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 40%;
    font-size: 0.8rem;
    height: 1.5rem;
    text-decoration: none;
    background: #d22509;
    color: #FFF;
    &:hover {
        cursor: pointer;
        background: #ff2805;
        -webkit-transition: background 0.2s ease-in-out;
        -moz-transition: background 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        color: #FFF;
      }
`
export const ChatForm = styled.form`
      padding: 5px;
    width: 90%;
    margin: auto;
`;
export const ChatInput = styled.input`
    width: 90%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    placeholder {
    color: #888;
}
`;
export const LiveWrapper = styled.div`
width: 98%;
margin: 0.5rem auto;
margin-top: 3rem;
min-height: 75vmin;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    position: relative;
`;
export const LiveSection = styled.section`
    width: 55%;
    height: 100%;
`;
export const LiveAside = styled.aside`
    overflow-x: hidden;
    overflow-y: scroll;
    width: 18%;
    // margin: 0.5rem auto;
    overflow: scroll;
    height: 60vmin;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
export const PlayerWrapper = styled.div`
  // margin-top: 4rem;  
  position: relative;
  width: 100%;
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
    margin: 0.5rem auto;
    min-height: 2rem;
    border-radius: 10px;
    width: 90%;
`;
export const VideoOverlayText = styled.h1`
  position: relative;
  z-index: 11000;
  color: #c13c43;
  padding: 0.5rem;
  text-align: center;
  margin: 0rem auto;
  font-size: 2rem;
//   text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
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
    margin: 0.5rem auto;
    // margin-bottom: -5rem;
`;
export const TimerText = styled.h2`
  color: #333;
  margin: 0;
  padding: 0.5rem;
`;
export const ScoreAndTimerDiv = styled.div`
  margin: 0rem auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const GameText = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0rem auto;
`;
export const Button = styled.button`
  font-weight: ${props => props.buttonsDisabled ? `400` : `600`};
  border-radius: 3px; 
  cursor: ${props => props.buttonsDisabled ? 'unset' : 'pointer'};
  width: ${props => props.width === 4 ? `19%` : `25%`};
  border: ${props => props.buttonsDisabled ? `#950451` : `1px solid #FFF`};
  background: ${props => props.buttonsDisabled ? `#85787f` :`#c13c43`};
  color: #FFF;
  margin-right: ${props => props.width === 4 ? `0.5rem` : `0.8rem`};
  &:last-child{
    margin-right: 0px;
  } 
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 14px;
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
  width: 90%;
  margin: 0.5rem auto;
  margin-top: 4.5rem;
  border-top: 3px solid #c13c43;
  @media(max-width: 767px){
      margin-top: 1rem;
  }
`;
export const AnswersWrapper = styled.div`
  position: absolute;
  top: 30%;
  z-index: 1000;
  pointer-events: ${props => props.buttonsDisabled ? `none` : `auto`};
  width: 100%;
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
  margin-bottom: 7rem;
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
  top: 50%;
  width: 100%;
  @media(min-width: 768px){
    margin: 3rem auto;
  }
`;
export const QuestionText = styled.h2`
  width: 80%;
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
