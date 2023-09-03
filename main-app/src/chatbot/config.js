import { createChatBotMessage } from 'react-chatbot-kit';
import DisplayUsers from '../components/widgets/DisplayUsers';
import DisplayAboutMe from '../components/widgets/AboutMe';
import DisplayConfig from '../components/widgets/DisplayConfig';
import NlpResponse from '../components/widgets/NlpResponse';
import Navigation from '../components/widgets/Navigation';
import MyAvatar from '../profiles/MyAvatar';

const config = {
    initialMessages: [createChatBotMessage(`Hello! How may I be of assistance today?`, { widget: 'navigation' })],
    botName: 'Health Helper Chatbot',
    customComponents: {
        botAvatar: (props) => <MyAvatar {...props} />
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
        },
        {
            widgetName: "aboutMe",
            widgetFunc: (props) => <DisplayAboutMe {...props} />,
            mapStateToProps: ["aboutMe"]
        },
        {
            widgetName: "displayConfig",
            widgetFunc: (props) => <DisplayConfig {...props} />,
            mapStateToProps: ["displayConfig"]
        },
        {
            widgetName: "nlpResponse",
            widgetFunc: (props) => <NlpResponse {...props} />,
            mapStateToProps: ["nlpResponse"]
        },
        {
            widgetName: "navigation",
            widgetFunc: (props) => <Navigation {...props} />,
            mapStateToProps: ["navigation"]   
        }
    ]
};

export default config;