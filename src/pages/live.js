import React, {useEffect, useState} from 'react';
import {LiveAside,LiveSection,LiveWrapper,ButtonWrapper,GameText,VideoOverlayDiv,VideoOverlayText,PageBreak,TimerText,ScoreAndTimerDiv,LeaderboardWrapper, LeaderboardUl, Li,PlayerWrapper,Button,QuestionText,Text,AnswersWrapper} from '../css/live';
import Player from '../components/player-components/player';
import Timer from '../components/player-components/timer';
import jwt_decode from 'jwt-decode'
import {slicedGame, getGameType} from '../helpers'
import {CSSTransition} from 'react-transition-group'
import '../css/transitions.css'
import Chat from '../components/chat'

const Live = ({location}) => {
    // const gameType = getGameType(location.pathname);
    const gameType = 'quiz';
    // const {game, playbackUrl} = location;
    // const game = window.location.pathname.split("/").pop();

    const game = "kroll-7";
    // only need access token, ID token can immediately be rolled over into user, in useEffect...
    const [messages,setMessages] = useState([{
        id: '1234-5678-90',
        message: 'here is a message',
        senderName: 'Bobby'
    }]);
    const [isTyping, setIsTyping] = useState(true);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});    

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [displayTime, setDisplayTime] = useState(null);
    const [startTimer, setStartTimer] = useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    
    const [leaders, setLeaders] = useState(null);
    const [counter, setCounter] = useState(100);
    const [startBroadcast,setStartBroadcast] = useState(false);
    const [wrongAnswerMessaging, setWrongAnswerMessaging] = useState(false);
    const [gameOverMessaging, setGameOverMessaging] = useState(false);
    
    const [question, setQuestion] = useState({
        question: '<Questions will appear here>',
            answersArray: ['Answer 1','Answer 2','Answer 3'],
            answerIndex: 1,
            questionId: '12345-678910-1223'
        });
    
    const [websocket, setWebsocket] = useState({});
    
    useEffect(() => {
        // let idToken = jwt_decode(localStorage.getItem('id_token'));
        // let token = localStorage.getItem('id_token');
        // setToken(token);
        // setUser({sub: idToken.sub, email: idToken.email, game});
        setUser({sub: '123-456-789', email: 'idToken.email', game});
        let token = '1234';
        setWebsocket(new WebSocket(process.env.REACT_APP_WS_URL+`?token=${token}`));
    },[]);
    
    websocket.onclose = (closeEvent) => {
        setTimeout(() => setReopenSocket(true),2000);
    };
    const setReopenSocket = () => {
        console.log('reopening websocket...');
        setWebsocket(new WebSocket(process.env.REACT_APP_WS_URL+`?token=${token}`));
    };
    websocket.onopen = (data) => {
        console.log('websocket: ',data);
        if(data){
            sendUserData();
        }
    }
    websocket.onmessage = ({data}) => {
        console.log('data 98: ',data);
        const {Data, leaders, gameStatus, predictive} = JSON.parse(data);
        if(data && Data && typeof Data.score == 'number') setScore(Data.score);
        if(leaders && leaders.length > 0)setLeaders(leaders);
        if(data && gameStatus === 'started') setStartBroadcast(true);
        if(data && gameStatus === 'over') setGameOverMessaging(true);
    }

    const sendUserData = () => {
        websocket.send(JSON.stringify({ action: 'routeUserData', data: {...user}}));
    };
    const sendQuizAnswer = e => {
        setButtonsDisabled(true);
        let time = getTime();
        if(e.target.id == question.answerIndex){
            setScore(time+score);
            let userAnswer = {
                id: question.questionId,
                answer: true,
                time
            };
            websocket.send(JSON.stringify({ action: 'routeAnswer', data: {...user,...userAnswer}}));
        } else {
            setWrongAnswerMessaging(true);
        }
        setButtonsDisabled(x => !x);
        setStartTimer(x => !x);
        setShowScore(x => !x);
        setDisplayTime(time);
        getLeaders();
    };
    const sendPollAnswer = e => {
        setButtonsDisabled(true);
        let userAnswer = {
            id: question.questionId,
            pollAnswerIndex: e.target.id 
        }
        websocket.send(JSON.stringify({ action: 'routePoll', data: {...user,...userAnswer}}));
    };

    const getLeaders = () => {
        setTimeout(function() {
            websocket.send(JSON.stringify({action: 'leaderboard',data: {...user}}));
            setShowScore(false);
            setWrongAnswerMessaging(false);
            let timer = document.getElementById('timer');
            timer.innerText = 100;
            setCounter(100);
        }.bind(this),11000)
    };
    
    const getTime = () => {
        let timer = document.getElementById("timer");
        let time = parseInt(timer.innerText);
        timer.innerHTML = time;
        return time;
    }

    return (
        <LiveWrapper>
            <LiveAside>
                <p>aside</p>
            </LiveAside>
            <LiveSection>
                <VideoOverlayDiv style={{margin: 'auto'}}>
                    <div style={{minHeight:'3rem'}}>
                        {wrongAnswerMessaging && <VideoOverlayText>Sorry, wrong answer!</VideoOverlayText>}
                        {!wrongAnswerMessaging && showScore && <VideoOverlayText>Correct! Score: <span>{displayTime}</span></VideoOverlayText>}
                        {!wrongAnswerMessaging && !showScore &&<VideoOverlayText>IMPULSE</VideoOverlayText>}

                    </div>
                    
                    {gameOverMessaging && !startBroadcast && <VideoOverlayText>Game Over</VideoOverlayText>}
                </VideoOverlayDiv>

                <CSSTransition
                    appear
                    timeout={400}
                    in={true}
                    classNames={"form"}
                    unmountOnExit
                    >
                <GameText>Game: {slicedGame(game)}</GameText>
                </CSSTransition>
                <ScoreAndTimerDiv>
                    <TimerText>Score: {score}</TimerText>
                    {gameType !== 'predictive' &&
                        <Timer 
                        gameType={gameType}
                        setStartTimer={setStartTimer}
                        startTimer={startTimer}
                        setShowScore={setShowScore}
                        showScore={showScore}
                        setButtonsDisabled={setButtonsDisabled}
                        counter={counter}
                        setCounter={setCounter}
                        />
                    }
                    </ScoreAndTimerDiv>
                <PlayerWrapper style={startBroadcast ? {pointerEvents:'none'} : {pointerEvents:'auto'}}>
                    <Player 
                        setStartTimer={setStartTimer}
                        setButtonsDisabled={setButtonsDisabled}
                        setQuestion={setQuestion}
                        setStartBroadcast={setStartBroadcast}
                        startBroadcast={startBroadcast}
                        />
                    <AnswersWrapper style={{marginTop:'0'}} buttonsDisabled={buttonsDisabled}>
                        <QuestionText>{question.question}</QuestionText>
                        <ButtonWrapper>
                            {
                                gameType === 'quiz' && question && question.answersArray.map((answer,i) => <Button width={question.answersArray.length === 4 ? 4 : 3} buttonsDisabled={buttonsDisabled} id={i} key={i} onClick={e => sendQuizAnswer(e)}>{answer}</Button>)
                            }
                        </ButtonWrapper>
                    </AnswersWrapper>
                </PlayerWrapper>
                <PageBreak />
                <LeaderboardWrapper>
                    <Text>{gameType === 'poll' ? 'Poll Results' : 'Leader Board'}</Text>
                    <LeaderboardUl>
                    {
                        leaders && leaders.length > 0 
                        ? leaders.map(({email,score},i) => <Li key={i}>{i+1}. {email}: {score}</Li>)
                        : null
                    }
                    </LeaderboardUl>
                </LeaderboardWrapper>
            </LiveSection>
            <LiveAside>
                <Chat messages={messages} isTyping={isTyping} />
            </LiveAside>
        </LiveWrapper>
    );
}

export default Live;