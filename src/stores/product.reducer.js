import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getSellerProduct } from '../api/productApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constant } from '../constant/constant';

export const fetchSellerProduct = createAsyncThunk('seller/product', async (obj) => {
  const response = await getSellerProduct(obj)
  return response
})



const sellerProductAdapter = createEntityAdapter()

const sellerProductSlice = createSlice({
  name: 'SellerProduct',
  initialState: sellerProductAdapter.getInitialState([]),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSellerProduct.fulfilled, (state, action) => {
        if(action.payload) sellerProductAdapter.setAll(state, [action.payload.data])
        sellerProductAdapter.getSelectors(state => state.SellerProduct)
      })
  }
})
// export const { selectAll } = sellerProductAdapter.getSelectors(state => state.SellerProduct)
export default sellerProductSlice.reducer
