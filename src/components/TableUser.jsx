import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserItem, fetchUserList } from '../action/actions'

const TableUser = () => {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userList.userList)
  const isLoading = useSelector((state) => state.userList.isLoading)
  const isError = useSelector((state) => state.userList.isError)

  useEffect(() => {
    dispatch(fetchUserList())
  }, [])

  const handleDeleteBtn = (userItem) => {
    dispatch(deleteUserItem(userItem.id))
  }

  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && !isError && (
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            )}

            {isError && !isLoading && (
              <tr>
                <td colSpan={4}>Something wrongs, please try again</td>
              </tr>
            )}
            {!isLoading &&
              !isError &&
              userList &&
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
