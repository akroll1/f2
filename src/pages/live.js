import React, {useEffect, useState} from 'react';
import {LiveAside,LiveSection,LiveWrapper,ButtonWrapper,GameText,VideoOverlayDiv,VideoOverlayText,PageBreak,TimerText,ScoreAndTimerDiv,LeaderboardWrapper, LeaderboardUl, Li,PlayerWrapper,Button,QuestionText,Text,AnswersWrapper} from '../css/live';
import Player from '../components/player-components/player';
import {slicedGame, getGameType} from '../helpers'
import Chat from '../components/chat'
import GamesAside from '../components/page-components/games-aside'

const Live = () => {
    const [chatMessages,setChatMessages] = useState([{
        id: '1234-5678-90',
        message: 'here is a message',
        senderName: 'Bobby'
    },{
        id: '1234-5678-90',
        message: 'here is a second message',
        senderName: 'Mike'
    },{
        id: '1234-5678-90',
        message: 'here is a third message',
        senderName: 'Bobby'
    }]);
    const [podcast, setPodcast] = useState({});
    const [chatInput, setChatInput] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});    
    const [startBroadcast,setStartBroadcast] = useState(false);
    const [websocket, setWebsocket] = useState({});
    
    useEffect(() => {
        setUser({sub: '123-456-789', email: 'idTokenDotEmail', podcast});
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
    }

    const sendUserData = () => {
        websocket.send(JSON.stringify({ action: 'routeUserData', data: {...user}}));
    };

    const onChatSubmit = (e) => {
        e.preventDefault();
        let message = {
            id: 'here is id',
            senderName:'name here',
            message: chatInput
        };
        setChatInput('');
        setChatMessages([...chatMessages,message]);
    }
    const handleChatInput = (e) => {
        setChatInput(e.target.value);
    };
    const handlePodcastClick = (e) => {
        let playbackUrl = e.target.getAttribute('data-url');
        setPodcast({playbackUrl,podcast:e.target.id});
    };
    // console.log('chatMessages: ',chatMessages);
    console.log('podcast: ',podcast)
    return (
        <LiveWrapper>
            <GamesAside
                handlePodcastClick={handlePodcastClick}
            />
            <LiveSection>
                <PlayerWrapper>
                    <Player 
                        podcast={podcast} 
                        startBroadcast={startBroadcast}
                        setStartBroadcast={setStartBroadcast}
                    />
                    
                </PlayerWrapper>
                <PageBreak />
                <LeaderboardWrapper>
                    <Text>Viewer Polls/Tweets Below</Text>
                </LeaderboardWrapper>
            </LiveSection>
            <LiveAside>
                <Chat 
                    chatMessages={chatMessages} 
                    isTyping={isTyping} 
                    handleChatInput={handleChatInput}
                    chatInput={chatInput}
                    onChatSubmit={onChatSubmit}
                />
            </LiveAside>
        </LiveWrapper>
    );
}

export default Live;