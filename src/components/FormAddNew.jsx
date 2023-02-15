import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormAddNew = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateUserBtn = () => {
    console.log(username, email, password)
  }

  return (
    <>
      <Container>
        <Form className="mt-3 d-flex flex-column align-items-center">
          <Form.Group className="mb-3 col-4" controlId="controlName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoComplete="name"
              type="text"
              placeholder="Bruce Wayne"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="controlEmailAddress">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoComplete="email"
              type="email"
              placeholder="bruce@wayne.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="controlPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoComplete="new-password"
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button
            className="mb-3 col-2"
            size="lg"
            variant="primary"
            onClick={handleCreateUserBtn}
            // disabled={isCreating}
          >
            Create user
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default FormAddNew
