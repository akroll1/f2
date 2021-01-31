import React, {useEffect, useState} from 'react';
import {LiveAside,LiveSection,LiveWrapper,ButtonWrapper,GameText,VideoOverlayDiv,VideoOverlayText,PageBreak,TimerText,ScoreAndTimerDiv,LeaderboardWrapper, LeaderboardUl, Li,PlayerWrapper,Button,QuestionText,Text,AnswersWrapper} from '../css/live';
import Player from '../components/player-components/player';
import {slicedGame, getGameType} from '../helpers'
import Chat from '../components/chat'
import GamesAside from '../components/games-aside'

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
    // setting podcast.game for DB schema...
    const [podcast, setPodcast] = useState({});
    const [playbackUrl,setPlaybackUrl] = useState(null);
    const [chatInput, setChatInput] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});    
    const [startBroadcast,setStartBroadcast] = useState(false);
    const [websocket, setWebsocket] = useState({});
    
    // useEffect(() => {
    //     setUser({sub: '123-456-789', email: 'idTokenDotEmail', podcast});
    //     let token = '1234';
    //     setWebsocket(new WebSocket(process.env.REACT_APP_WS_URL+`?token=${token}`));
    // },[]);

    websocket.onopen = (data) => {
        console.log('websocket: ',data);
        if(data && podcast.game){
            sendUserData();
        }
    }
    websocket.onclose = (closeEvent) => {
        setTimeout(() => setReopenSocket(true),2000);
    };
    websocket.onmessage = ({data}) => {
        console.log('data 98: ',data);
    }

    const setReopenSocket = () => {
        console.log('reopening websocket...');
        setWebsocket(new WebSocket(process.env.REACT_APP_WS_URL+`?token=${token}`));
        setUser({sub: '123-456-789', email: 'idTokenDotEmail', podcast});
    };

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
        setPlaybackUrl(playbackUrl);
        // setPodcast({playbackUrl,podcast:e.target.id, game:e.target.id});
        // setReopenSocket();
    };
    // console.log('chatMessages: ',chatMessages);
    // console.log('playbackUrl: ',playbackUrl);
    // console.log('podcast: ',podcast)
    return (
        <LiveWrapper style={{flexBasis:'1 0 auto'}}>
            <GamesAside
                handlePodcastClick={handlePodcastClick}
            />
            <LiveSection>
                <PlayerWrapper>
                    <Player 
                        playbackUrl={playbackUrl} 
                        startBroadcast={startBroadcast}
                        setStartBroadcast={setStartBroadcast}
                    />
                    
                </PlayerWrapper>
                <PageBreak />
                <LeaderboardWrapper>
                    <Text>Viewer Polls/Tweets Below</Text>
                </LeaderboardWrapper>
            </LiveSection>
            <LiveAside style={{border: '1px solid lightgray'}}>
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