import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    users:[{device : "laptop",name :"satham" ,email :"satham@gmail.com" ,password:"aaaaa"},
    {device : "mobile",name :"hussain" ,email :"hussain@gmail.com" ,password:"bbbbb"}]
   }

    const userSlice = createSlice({
    name:'user',
    initialState,
    reducers : {
        add : (state,action) =>{
            state.users = 
            [...state.users,{device: action.payload.device,name : action.payload.name,
                email:action.payload.email,password:action.payload.password}]
        },  
    }
})

export const {add} = userSlice.actions
export default userSlice.reducer