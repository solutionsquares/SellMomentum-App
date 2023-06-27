import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
  } from '@reduxjs/toolkit'
  import { getUser,registerUser } from '../api/ApiUser'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { constant } from '../constant/constant';
  
  export const registerUsers = createAsyncThunk('user/registerUser', async (obj) => {
    console.log(obj)
    const response = await registerUser(obj)
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
        
        .addCase(registerUsers.fulfilled, (state, action) => {
          if(action.payload) userAdapter.setAll(state, [action.payload.data])
          userAdapter.getSelectors(state => state.user)
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
  