import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
  } from '@reduxjs/toolkit'
  import { getSellerProduct, getCategories } from '../api/productApi'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { constant } from '../constant/constant';
  
  export const fetchSellerProduct = createAsyncThunk('seller/product', async (obj) => {
    console.log(obj)
    const response = await getSellerProduct(obj)
    return response
  })
  const sellerProductAdapter = createEntityAdapter();
  const sellerProductSlice = createSlice({
    name: 'sellerProduct',
    initialState: sellerProductAdapter.getInitialState([]),
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSellerProduct.fulfilled, (state, action) => {
          // Handle the fetched data and update the state
        });
    },
  });
  export const { getProducts} = sellerProductAdapter.getSelectors(state => state.sellerProduct)
  export const { selectAll: selectAllSellerProduct } = sellerProductAdapter.getSelectors((state) => state.sellerProduct);
  export default  sellerProductSlice.reducer

