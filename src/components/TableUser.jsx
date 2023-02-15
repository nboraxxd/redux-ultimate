import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList } from '../redux/slices/userSlice'

const TableUser = () => {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userList.userList)
  const isLoading = useSelector((state) => state.userList.isLoading)
  const isError = useSelector((state) => state.userList.isError)

  console.log(userList)

  useEffect(() => {
    dispatch(fetchUserList())
  }, [])

  const handleDeleteBtn = (userItem) => {
    console.log(userItem)
  }

  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4}>Loading</td>
              </tr>
            )}

            {isError && (
              <tr>
                <td colSpan={4}>Something wrongs, please try again</td>
              </tr>
            )}

            {!isLoading &&
              !isError &&
              Array.isArray(userList) &&
              userList.length > 0 &&
              userList.map((userItem) => (
                <tr key={userItem.id}>
                  <td>{userItem.id}</td>
                  <td>{userItem.username}</td>
                  <td>{userItem.email}</td>
                  <td>
                    <button type="button" className="btn btn-warning me-2">
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteBtn(userItem)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default TableUser
