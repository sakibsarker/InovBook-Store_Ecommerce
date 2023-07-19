import {createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const initialState={
    userInfo:localStorage.getItem('userInfo')
    ?JSON.parse(localStorage.getItem('userInfo'))
    :null,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.userInfo=action.payload
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
            // localStorage.setItem('token', JSON.stringify(action.payload.token))
            // //cookies storage
            // Cookies.set('token', action.payload.token)

            

        },
        logout:(state,action)=>{
            state.userInfo=null;
            localStorage.removeItem('userInfo');
            // localStorage.removeItem('token');
            // Cookies.remove('token')
           
           
        }
    }
})

export const{setCredentials,logout}=authSlice.actions;

export default authSlice.reducer