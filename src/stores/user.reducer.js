import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getUser,getAllList } from '../api/ApiUser'

export const fetchUser = createAsyncThunk('user/getUser', async () => {
  const response = await getUser()
  return response
})

export const selectAll = createAsyncThunk('user/getAllList', async () => {
  console.log("getAllList user")
  const response = await getAllList()
  console.log("response",response)
  return response
})

const userAdapter = createEntityAdapter()

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    isLoading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        userAdapter.setAll(state, action.payload)
        state.isLoading = false
      })
      .addCase(fetchUser.rejected, state => {
        state.isLoading = false
      })
      // .addCase(selectAll.fulfilled, (state, action) => {
      //   console.log("sgr",action.payload)
      //   if(action.payload) userAdapter.setAll(state, action.payload)
      //   userAdapter.getSelectors(state => state.members)
      //   state.isLoading = false

      // })
  }
})

// export const { selectAll } = userAdapter.getSelectors(state => state.members)

export default userSlice.reducer
