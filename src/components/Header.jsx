import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux'

const Header = () => {
  const userList = useSelector((state) => state.userList.userList)

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown
                title={userList && userList.length > 0 ? `${userList.length} users` : '0 user'}
                id="basic-nav-dropdown"
              >
                {userList &&
                  userList.length > 0 &&
                  userList.map((userItem) => (
                    <NavDropdown.Item key={userItem.id}>{userItem.email}</NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
