import React from 'react';
import fetchDefinition from '../language_models/DefinitionGenerator';

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

  displaySearchDefinition = (userInput) => {
    const message = this.createChatBotMessage(fetchDefinition(userInput));
    this.setChatBotMessage(message)
  }

  // method to add chatbot message to the state
  setChatBotMessage = (message) => {
    this.setStateFunc(state => ({ ...state, messages: [...state.messages, message] }))
  }  
}

export default ActionProvider;