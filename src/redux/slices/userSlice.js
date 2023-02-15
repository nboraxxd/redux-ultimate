import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const fetchUserList = createAsyncThunk('users/fetchUserList', async () => {
  const response = await axios.get('http://localhost:8080/users/allss')
  return response.data
})

const initialState = {
  userList: [],
  isLoading: false,
  isError: false,
}

export const userSlice = createSlice({
  name: 'fetchUserList',
  initialState,

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUserList.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.isLoading = false
        state.userList = action.payload
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export default userSlice.reducer
