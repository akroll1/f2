import React from 'react'
import { ChatFeed, Message } from 'react-chat-ui'
import {ChatButton,ChatForm,ChatInput} from '../css/live'
import './chat.css'
const Chat = ({onChatSubmit,handleChatInput,chatInput,chatMessages, isTyping}) => {
    return (
    <>
        <ChatForm style={{padding: '5px'}} onSubmit={onChatSubmit}>
            <ChatInput 
                onChange={(e) => handleChatInput(e)}
                placeholder="Message" 
                value={chatInput}
            />
            <ChatButton>Send</ChatButton>
        </ChatForm>
         <ChatFeed
            id="chat-feed"
            messages={chatMessages}
            isTyping={isTyping} 
            hasInputField={false} 
            showSenderName 
            bubblesCentered={false} 
            bubbleStyles={{
                text: {
                        fontSize: '0.7rem',
                        color: '#333'
                    },
                    chatbubble: {
                        borderRadius: '10px',
                        padding: '0.5rem',
                        marginBottom:'5px'
                    }
                }
            }
        />
    </>
    )
}
export default Chat