import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getCategories } from '../api/productApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constant } from '../constant/constant';



export const fetchCategories = createAsyncThunk('categories', async (token) => {
  const response = await getCategories(token)
  console.log(response)
  return response
})


const categoriesAdapter = createEntityAdapter()


const categorySlice = createSlice({
  name: 'category',
  initialState: categoriesAdapter.getInitialState([]),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        console.log(action)
        console.log(state)
        if(action.payload) {
          categoriesAdapter.setAll(state, [action.payload.data])
        }
        categoriesAdapter.getSelectors(state => state.user)
      })
   
  }

});

// export const { selectAll } = sellerProductAdapter.getSelectors(state => state.SellerProduct)
// export const { addCategory } = categorySlice.actions;
export const { addCategory } = categoriesAdapter.getSelectors(state => state.category)
export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors((state) => state.category);

export default categorySlice.reducer

