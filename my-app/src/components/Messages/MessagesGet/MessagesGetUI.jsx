import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MessagesGetUI = ({ newMessage, changeForm, refer }) => {
  return (
    <div>
      {newMessage.map(({ message, id }) => {
        return (
          <div key={id}>
            <p>{message}</p>
          </div>
        );
      })}
      <Form onSubmit={changeForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" ref={refer} />
        </Form.Group>
        <Button type="submit" variant="success">
          Send
        </Button>{' '}
      </Form>
    </div>
  );
};

export default MessagesGetUI;
