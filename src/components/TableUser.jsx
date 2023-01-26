import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserRedux, fetchAllUsers } from '../action/actions';

const TableUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const handleClickDeleteBtn = (item) => {
    dispatch(deleteUserRedux(item.id));
  };
  return (
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
          {!isError && isLoading && (
            <tr>
              <td colSpan={2}>Loading data...</td>
            </tr>
          )}

          {isError && (
            <tr>
              <td colSpan={2}>Something wrongs, please try again...</td>
            </tr>
          )}

          {!isError &&
            !isLoading &&
            userList &&
            userList.length > 0 &&
            userList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <button type="button" className="btn btn-warning me-2">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClickDeleteBtn(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUser;
