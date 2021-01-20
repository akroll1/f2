import React from 'react'
import { ChatFeed, Message } from 'react-chat-ui'

const Chat = ({messages, isTyping}) => {
    return (
        <ChatFeed
            messages={messages} // Array: list of message objects
            isTyping={isTyping} 
            hasInputField={false} 
            showSenderName 
            bubblesCentered={false} 
            bubbleStyles={
                {
                    text: {
                        fontSize: '1rem',
                        color: '#333'
                    },
                    chatbubble: {
                        borderRadius: '10px',
                        padding: '0.5rem',
                        marginBottom:'5rem'
                    }
                }
            }
        />
    )
}
export default Chat