
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    console.log(this.state);

    // call function here
    if (lowercase.includes("hello")) {
      this.actionProvider.handleHello()
    }

    else if (lowercase.includes("user")) {
      this.actionProvider.displayExistingUsers()
    }

    else if (lowercase.includes("about")) {
      this.actionProvider.displayAboutMe()
    }

    else if (lowercase.includes("config")) {
      this.actionProvider.displayConfigData()
    }

    else if (lowercase.includes("tip")) {
      this.actionProvider.displayPromptResponse()
    }

    else {
      this.actionProvider.promptNext()
    }
  }
}

export default MessageParser;