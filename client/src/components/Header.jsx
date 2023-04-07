import React from 'react';
import { AppBar, Toolbar} from '@mui/material';
import { Menu } from '@mui/icons-material';
import styled from '@emotion/styled';


const img = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

const MenuIcon = styled(Menu)`
    color: black;
`



const Header = () => {
  return (
    <>
    <AppBar style={{background: '#FEFEFF', height:'70px', position: 'static'}}>
        <Toolbar>
            <MenuIcon/>
            <img src={img}alt=""  style={{height: '55px', textAlign: 'center', margin: 'auto', paddingRight: '70px'}}/>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header