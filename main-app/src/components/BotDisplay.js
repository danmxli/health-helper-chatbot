import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/input_response_control/MessageParser";
import ActionProvider from "../chatbot/input_response_control/ActionProvider";

const MainDialog = () => {
    return (
        <div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default MainDialog;