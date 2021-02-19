import React, { useState } from 'react';

function ErrorMessage(props) {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div>
      {!isClosed ? (
        <div className="error-axios">
          <span className="closebtn" onClick={() => setIsClosed(true)}>
            &times;
          </span>
          {props.children}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ErrorMessage;
