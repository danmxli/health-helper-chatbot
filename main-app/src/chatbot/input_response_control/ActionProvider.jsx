
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setStateFunc = setStateFunc;
  }

  handleHello = () => {
    const message = this.createChatBotMessage("Greetings! To get started, please ask a question.");
    this.setChatBotMessage(message)
  }

  displayExistingUsers = () => {
    const message = this.createChatBotMessage("Here is a list of our existing users who enjoy our bot functionalities.", { widget: 'displayUsers' });
    this.setChatBotMessage(message)
  }

  displayAboutMe = () => {
    const message = this.createChatBotMessage("Glad you asked about me!", { widget: 'aboutMe' });
    this.setChatBotMessage(message)
  }

  displayConfigData = () => {
    const message = this.createChatBotMessage("User configuration settings: ", { widget: 'displayConfig' });
    this.setChatBotMessage(message);
  }

  displayPromptResponse = () => {
    const message = this.createChatBotMessage("Generating response. ", { widget: 'nlpResponse' });
    this.setChatBotMessage(message);
  }

  // method to add chatbot message to the state
  setChatBotMessage = (message) => {
    this.setStateFunc(state => ({ ...state, messages: [...state.messages, message] }))
  }
}

export default ActionProvider;