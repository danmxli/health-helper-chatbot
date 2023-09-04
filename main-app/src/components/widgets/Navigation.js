import Options from "./Options";

const Navigation = (props) => {
    const options = [
        {
            name: "Show list of users enjoying the chatbot online",
            handler: props.actionProvider.displayExistingUsers,
            id: 1
        },
        {
            name: "Ask about me",
            handler: props.actionProvider.displayAboutMe,
            id: 2
        },
        {
            name: "View response configuration settings",
            handler: props.actionProvider.displayConfigData,
            id: 3
        },
        {
            name: "Generate health tips",
            handler: props.actionProvider.displayPromptResponse,
            id: 4
        },
        {
            name: "Ask for help",
            handler: props.actionProvider.displayInstructions,
            id: 5
        }
    ];
    return <Options options={options} {...props} />;
};

export default Navigation;