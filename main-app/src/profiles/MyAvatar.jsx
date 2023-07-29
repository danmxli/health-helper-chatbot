import React from 'react';
import bot_logo from './icons/bot_logo.svg'

const MyAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div
                className="react-chatbot-kit-chat-bot-avatar-container"
                style={{ background: "none" }}
            >
                <img alt="BotAvatar" src={bot_logo} width='45' height='45'/>
            </div>
        </div>
    );
};

export default MyAvatar;