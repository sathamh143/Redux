import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Form from 'react-bootstrap/Form';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import {useDispatch } from 'react-redux';
import { add, } from './User';

export default function SelectLabels(props) {

const initialFormState = {id:null,device:'',userName:'',userEmail:'',password:''}
const [user,setUser] = useState (initialFormState );
const [device,setDevice] = useState ("");
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const dispatch = useDispatch("");

  
  return (
    <>
       
    <Container maxWidth="sm" className='border m-6 mt-4 '>
     
      <Form onSubmit={
        event => {
          event.preventDefault();
         if(!user.name||!user.email||!user.password||!user.device)return ;
          props.addUser(user)
          setUser(initialFormState )
        }
      }>
      <FormControl sx={{ m: 2, minWidth : 250, }} className =  'mb-3'>
        <InputLabel 
        id="demo-simple-select-helper-label"
         className ='mb-3'
         >Device</InputLabel>
        <Select
          value={device}
          name ="device"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          className='mb-3'
          onChange={(e) => setDevice(e.target.value)}>
          <MenuItem value={"Mobile"}>Mobile</MenuItem>
          <MenuItem value={"Keyboard"}>Keyboard</MenuItem>
          <MenuItem value={"Laptop"}>Laptop</MenuItem>
          <MenuItem value={"Mouse"}>Mouse</MenuItem>
          <MenuItem value={"CPU"}>CPU</MenuItem>
        </Select>
            <Input
            id="outlined-basic-" 
            placeholder="Enter Your Name"
            name ="name"
             variant="outlined"
             type="name"
             onChange={(e) => setName(e.target.value)}
             value={name}
              className='mb-3' />
            <Input
            id="outlined-basic" 
            placeholder ="Enter Your Email"
            name ="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
             variant="outlined" 
             className='mb-3'/>
            <Input 
            id="outlined-password-input"
             placeholder="Enter Your Password"
             name ="password"
             value ={password}
             onChange={(e) => setPassword(e.target.value)}
             type="password"
             autoComplete="current-password"/>
        <Button
         variant="contained" 
         size="medium" 
         type='submit'
         className='m-3'
         onClick = {() => {
          if(!device || !name ||!email ||!password){
            return
          }
          dispatch(add({device:device,name:name,email:email,password:password,}))
          setDevice("");
          setName("");
          setEmail("");
          setPassword("");
         }}>
          Submit
        </Button>
     </FormControl>
     </Form>
    </Container>
    

    </>
  );
}
