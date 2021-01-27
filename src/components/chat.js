import React from 'react'
import { ChatFeed, Message } from 'react-chat-ui'
import {ChatButton,ChatForm,ChatInput} from '../css/live'
const Chat = ({onChatSubmit,handleChatInput,chatInput,chatMessages, isTyping}) => {
    return (
    <>
        <ChatForm onSubmit={onChatSubmit}>
            <ChatInput 
                id="chat"
                onChange={(e) => handleChatInput(e)}
                placeholder="Message" 
                value={chatInput}
            />
            <ChatButton>Send</ChatButton>
        </ChatForm>
         <ChatFeed
            style={{width: '100%'}}
            messages={chatMessages} // Array: list of message objects
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