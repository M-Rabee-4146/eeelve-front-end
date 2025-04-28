import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../Service/axios";

export const SignupUser=createAsyncThunk('Register',async(user,{rejectWithValue})=>{
    try {
        const response= await axiosinstance.post('/Register',user)
        // console.log(response)
        return response.data;
        
    } catch (error) {
        return rejectWithValue(error.response?.data?.message)
    }
})

export const loginuser=createAsyncThunk('login ',async(user,{rejectWithValue})=>{ 
    try {
        
        const response= await axiosinstance.post('/Login',user)
        return response.data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data.message || "Something went wrong");
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        role:null,
        token: null,
        error:null,
        loading:false,
        authenticated:false,
    },
    reducers: {
        logout(state) {
            state.token = null,
            state.user = null,
            state.role=null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SignupUser.pending,(state)=>{
            state.loading=true,
            state.error=null
        }),
        builder.addCase(SignupUser.fulfilled,(state,action)=>{
            state.loading=false,
            state.user=action.payload,
            // state.token=action.payload.token,
            state.authenticated=true
            // state.role=action.payload.role
        }),
        builder.addCase(SignupUser.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
        }),
        builder.addCase(loginuser.pending,(state)=>{
            state.loading=true,
            state.error=null
        }),
        builder.addCase(loginuser.fulfilled,(state,action)=>{
            state.loading=false,
            state.user=action.payload.user,
            state.token=action.payload.token,
            state.authenticated=true,
            state.role=action.payload.user.role
        }),
        builder.addCase(loginuser.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
        })

    }
    })
    export default authSlice.reducer;
    export const {logout} = authSlice.actions;