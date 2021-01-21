import React from 'react'
import { ChatFeed, Message } from 'react-chat-ui'

const Chat = ({chatMessages, isTyping}) => {
    return (
        <ChatFeed
            messages={chatMessages} // Array: list of message objects
            isTyping={isTyping} 
            hasInputField={false} 
            showSenderName 
            bubblesCentered={false} 
            bubbleStyles={
                {
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
    )
}
export default Chat