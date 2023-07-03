import { createChatBotMessage } from 'react-chatbot-kit';
import DisplayUsers from '../components/DisplayUsers';

const config = {
    initialMessages: [createChatBotMessage(`Hello! How may I be of assistance today?`)],
    botName: 'Insurance Helper Chatbot',
    customComponents: {

    },
    customStyles: {
        botMessageBox: {
            backgroundColor: '#576B7E',
        },
        chatButton: {
            backgroundColor: '#688A58',
        },
    },
    state: {
        displayUsers: []
    },
    widgets: [
        {
            widgetName: "displayUsers",
            widgetFunc: (props) => <DisplayUsers {...props} />,
            mapStateToProps: ["displayUsers"]
        }
    ]
};

export default config;