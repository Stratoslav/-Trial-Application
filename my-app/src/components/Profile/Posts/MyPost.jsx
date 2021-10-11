import React from 'react';
import { connect } from 'react-redux';
import { ADD_POST } from '../../../redux/create-actions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const MyPosts = ({ dispatch }) => {
  const refer = React.createRef();

  const changeForm = e => {
    e.preventDefault();
    let text = refer.current.value;
     if(text.length === 0) {
      alert("Sorry, but need to fill in the gaps")
      return
    } else {
      dispatch(ADD_POST(text));
      refer.current.value = '';
    }

   
  };

  return (
    <>
      <Form onSubmit={changeForm}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Writen the new post</Form.Label>
    <Form.Control type="text" placeholder="Add post" ref={refer}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
        <Button type="submit"  variant="success">Add Posts</Button>{' '}
      </Form>
    </>
  );
};


export default connect(null, null)(MyPosts) ;
