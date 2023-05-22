import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getUser,getAllList } from '../api/ApiUser'

export const fetchUser = createAsyncThunk('user/getUser', async (obj) => {
  const response = await getUser(obj)
  return response
})



const userAdapter = createEntityAdapter()

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState([]),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if(action.payload) userAdapter.setAll(state, [action.payload.data])
        userAdapter.getSelectors(state => state.members)
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



export const { selectAll } = userAdapter.getSelectors(state => state.user)
export default userSlice.reducer
