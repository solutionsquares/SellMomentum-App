import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getUser,registerUser,logOutUser } from '../api/ApiUser'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constant } from '../constant/constant';

export const fetchUser = createAsyncThunk('user/getUser', async (obj) => {
  const response = await getUser(obj)
  console.log(response)
  return response
})

export const registerUsers = createAsyncThunk('user/registerUser', async (obj) => {
  console.log(obj)
  const response = await registerUser(obj)
  console.log(response)
  return response
})
export const LogoutUser = createAsyncThunk('user/getUser', async (obj) => {
  console.log(obj)
  const response = await logOutUser(obj)
  console.log(response)
  return response
})



const userAdapter = createEntityAdapter()

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState([]),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        if(action.payload) {
          userAdapter.setAll(state, [action.payload.data])
        }
        userAdapter.getSelectors(state => state.user)
      })
   
  }


  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchUser.pending, (state, action) => {
  //       state.isLoading = true
  //     })
  //     .addCase(fetchUser.fulfilled, (state, action) => {
  //       console.log("fetchUser setAll")
  //       userAdapter.setAll(state, action.payload)
  //       state.isLoading = false
  //     })
  //     .addCase(fetchUser.rejected, state => {
  //       state.isLoading = false
  //     })
  // }
})



export const { selectAll } = userAdapter.getSelectors(state => state.user)
export default userSlice.reducer
