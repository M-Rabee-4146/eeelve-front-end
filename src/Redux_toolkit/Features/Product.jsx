import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axiosinstance from "../../Service/axios";

export const uploadproduct = createAsyncThunk('postproduct', async (formData, thunkAPI) => {
    try {
        // console.log(formData)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        const response = await axiosinstance.post('/postproduct', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response?.data || 'Upload failed');
    }
}
);

export const getallproducts = createAsyncThunk('getproduct', async (data,{rejectWithValue}) => {
    try {
        const response = await axiosinstance.get('/products') 
        // console.log(response.data)
        return response.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.response?.data || 'Upload failed');
    }
}
);

export const getsingleproduct = createAsyncThunk('getproductbyid', async (id,{rejectWithValue}) => {
    try {
        const response = await axiosinstance.get(`/getproduct/${id}`) 
        // console.log(response.data)
        return response.data;
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.response?.data || 'Upload failed');
    }
}
);
export const deleteproductbyid = createAsyncThunk('deleteproductbyid', async (id,{rejectWithValue}) => {
    try {
        const response = await axiosinstance.delete(`/delete/${id}`) 
        console.log(response.data)
        return {id,message:'prodict deleted succesfully'}
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.response?.data || 'Upload failed');
    }
}
);


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        selectedProduct: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadproduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        }),
            builder.addCase(uploadproduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = [...state.products, action.payload]
                // state.selectedProduct=action.payload.product;
            }),
            builder.addCase(uploadproduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
            builder.addCase(getallproducts.pending, (state) => {
                state.loading = true;
                state.error = null;

            }),
            builder.addCase(getallproducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;

            }),
            builder.addCase(getallproducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
            builder.addCase(getsingleproduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            }),
            builder.addCase(getsingleproduct.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;

            }),
            builder.addCase(getsingleproduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
            builder.addCase(deleteproductbyid.pending,(state)=>{
                state.loading=true;
                state.error=null;
            }),
            builder.addCase(deleteproductbyid.fulfilled,(state,action)=>{
                state.loading=false;
                state.products=state.products.filter((product)=>product._id!==action.payload.id);

            }),
            builder.addCase(deleteproductbyid.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
    }
})
export default productSlice.reducer;