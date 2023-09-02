
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

    if (lowercase.includes("user")) {
      this.actionProvider.displayExistingUsers()
    }

    if (lowercase.includes("about")) {
      this.actionProvider.displayAboutMe()
    }

    if (lowercase.includes("config")) {
      this.actionProvider.displayConfigData()
    }

    if (lowercase.includes("tip")) {
      this.actionProvider.displayPromptResponse()
    }
  }
}

export default MessageParser;