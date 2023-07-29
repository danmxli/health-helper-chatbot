import React from 'react';

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

  // method to add chatbot message to the state
  setChatBotMessage = (message) => {
    this.setStateFunc(state => ({ ...state, messages: [...state.messages, message] }))
  }

  displayAboutMe = () => {
    console.log("test");
    const message = this.createChatBotMessage("Glad you asked! I am a website chatbot designed to help you familiarize yourself with insurance terms.");
    this.setChatBotMessage(message)
  }
}

export default ActionProvider;