import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserRedux } from '../action/actions';

const FormAddNew = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isCreating = useSelector((state) => state.user.isCreating);

  const handleOnClickCreateUserBtn = () => {
    dispatch(createNewUserRedux(username, email, password));
    setTimeout(() => {
      setUsername('');
      setEmail('');
      setPassword('');
    }, 2000);
  };

  return (
    <Container>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            autoComplete="username"
            placeholder="brucewayne"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="bruce@wayne.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button
          className="mb-3 col-2"
          variant="primary"
          onClick={handleOnClickCreateUserBtn}
          disabled={isCreating}
        >
          Create user
        </Button>
      </Form>
    </Container>
  );
};

export default FormAddNew;
