import { createChatBotMessage } from 'react-chatbot-kit';
import DisplayUsers from '../components/widgets/DisplayUsers';
import SearchDefinition from '../components/widgets/SearchDefinition';
import MyAvatar from '../profiles/MyAvatar';

const config = {
    initialMessages: [createChatBotMessage(`Hello! How may I be of assistance today?`)],
    botName: 'Insurance Helper Chatbot',
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
            widgetName: "searchDefinition",
            widgetFunc: (props) => <SearchDefinition {...props}/>
            // mapStateToProps: ["searchDefinition"]
        }
    ]
};

export default config;