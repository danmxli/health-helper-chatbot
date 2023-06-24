/**
 * 
 * @param {*} message user input to be parsed
 * @param {*} actions chatbot response
 */
export default function InputControl(message, actions) {
  // parse to string value
  let str = message.toString();
  // string manipulation

  if (message.includes('hello')) {
    actions.handleHello();
  }
}
