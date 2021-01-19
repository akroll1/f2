import React, {useEffect, useState} from 'react';
import {ButtonWrapper,GameText,VideoOverlayDiv,VideoOverlayText,PageBreak,TimerText,ScoreAndTimerDiv,LeaderboardWrapper, LeaderboardUl, Li,PlayerWrapper,Button,QuestionText,Text,AnswersWrapper} from '../css/live';
import Player from '../components/player-components/player';
import Timer from '../components/player-components/timer';
import jwt_decode from 'jwt-decode'
import {slicedGame, getGameType} from '../helpers'
import {CSSTransition} from 'react-transition-group'
import '../css/transitions.css'

const Live = ({location}) => {
    // const gameType = getGameType(location.pathname);
    const gameType = 'quiz';
    // const {game, playbackUrl} = location;
    // const game = window.location.pathname.split("/").pop();
    // need to put game and playback url in localStorage...
    // put in a check for if game + playbackUrl are undefined, get from local storage...

    const game = "kroll-7";
    // only need access token, ID token can immediately be rolled over into user, in useEffect...
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
    const [predictiveQuestion, setPredictiveQuestion] = useState({
        question: 'Make your Pick',
        answersArray: ['Pass','Run','Score','Defense/ST'],
        predictiveQuestionId: '12345-678-91011'
    });
    
    const [websocket, setWebsocket] = useState({});
    const [predictiveAnswer, setPredictiveAnswer] = useState({});
    const [predictiveData,setPredictiveData] = useState({});
    
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
        if(data && predictive && predictive.predictiveId) setPredictiveData(predictive);
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
        setButtonsDisabled(true);
        setStartTimer(false);
        setShowScore(true);
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
    const scorePredictive = (e) => {
        const answer = predictiveQuestion[e.target.id];
        console.log('answer: ',answer);
        const {questionId} = predictiveQuestion;
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
    // console.log('predictiveData: ',predictiveData);
    // console.log('buttonsDisabled: ',buttonsDisabled);
    // console.log('predictiveAnswer: ',predictiveAnswer);
    return (
        <div style={{position: 'relative'}}>

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
                    <QuestionText>{gameType !== 'predictive' ? question.question : predictiveQuestion.question}</QuestionText>
                    <ButtonWrapper>
                        {
                            gameType === 'poll' && question && question.answersArray.length > 0 && question.answersArray.map((answer,i) => <Button width={question.answersArray.length === 4 ? 4 : 3} buttonsDisabled={buttonsDisabled} id={i} key={i} onClick={e => sendPollAnswer(e)}>{answer}</Button>)
                        }
                        {
                            gameType === 'quiz' && question && question.answersArray.map((answer,i) => <Button width={question.answersArray.length === 4 ? 4 : 3} buttonsDisabled={buttonsDisabled} id={i} key={i} onClick={e => sendQuizAnswer(e)}>{answer}</Button>)
                        }
                        {
                            gameType === 'predictive' && predictiveQuestion && predictiveQuestion && predictiveQuestion.answersArray.map((answer,i) => <Button width={predictiveQuestion.answersArray.length === 4 ? 4 : 3} buttonsDisabled={buttonsDisabled} id={predictiveQuestion.id} key={i} onClick={i => setPredictiveAnswer({id:predictiveQuestion.id,answerIndex:i})}>{answer}</Button>)
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
        </div>
    );
}

export default Live;