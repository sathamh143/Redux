import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import Form from "./Form";
import  UserTableOne from './UserTableOne';


export default function MenuAppBar() {

const [status,setStatus] = React.useState (true);

  React.useEffect(()=>{
    console.log ("zoho company");
  },[]);

 

  
  return (
    <>
        <div>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Zoho
                  </Typography> 
                
                </Toolbar>
              </AppBar>
            </Box>
          </div>
          <Typography variant='h3'>Employer Profile</Typography>
            {
            status ? null :  <Form/>
            }
            <Switch 
            label= ""
            Checked
            onClick={()=> setStatus (!status)}
            />
          <UserTableOne/>
       </>  
      );
    }
