import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import ListIcon from '@mui/icons-material/List';
import { Button} from '@mui/material';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


import { IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import { NavLink } from 'react-router-dom';

function DrawerBox({data}) {
 
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{sx:{backgroundColor:"black",width:"200px",color:"white"}}}  open={open} onClose={() => setOpen(false)} >
        <List sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} value={0}>
          {data.map((val,indx)=>
           

            <ListItemButton key={indx} >
            <ListItemIcon >
              <ListItemText sx={{color:"white"}}>
                 {val}
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          
          )
        }
         <ListItemButton >
              <Button sx={{backgroundColor:"green",width:"100px"}} variant='contained'>Login</Button>
         </ListItemButton>
         <ListItemButton >
              <Button sx={{backgroundColor:"Blue",width:"100px"}} variant='contained'>Register</Button>
         </ListItemButton>
         <ListItemButton >
              <Button  variant='contained' sx={{backgroundColor:"Black",}} ><ShoppingCartCheckoutIcon sx={{fontSize:"35px"}}/></Button>
         </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={()=>{setOpen(true)}}>
        <ListIcon sx={{color:"white"}}/>
      </IconButton>
    </>
  )
}

export default DrawerBox