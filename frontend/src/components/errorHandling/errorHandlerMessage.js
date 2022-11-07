import React from 'react';

const errorHandlerMessage = (message) => {
  if (message === '') {
    return (
      <div id="message-error-empty">
        You need to write some text if you want to express your hate, you idiot.
      </div>
    );
  } else if (!message.match(/^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/)) {
    return (
      <div id="message-error-invalid">
        You have introduced some invalid special characters, good luck next
        time, you clearly need it.
      </div>
    );
  }
};
export default errorHandlerMessage;