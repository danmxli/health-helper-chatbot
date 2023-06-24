import React from 'react';
import InputControl from './message_logic/InputControl';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    InputControl(message, actions);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;