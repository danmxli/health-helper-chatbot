
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setStateFunc = setStateFunc;
  }

  displayInstructions = () => {
    const message = this.createChatBotMessage("You entered \"help.\" Here is how to prompt the chatbot:", { widget: 'instructions' });
    this.setChatBotMessage(message)
  }

  promptNext = () => {
    const message = this.createChatBotMessage("How can I help you?", { widget: 'navigation' });
    this.setChatBotMessage(message)
  }

  handleHello = () => {
    const message = this.createChatBotMessage("Greetings! To get started, please ask a question, or select the following:", { widget: 'navigation' });
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