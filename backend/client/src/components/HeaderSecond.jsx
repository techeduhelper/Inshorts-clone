import React from 'react';
import { Box, Typography ,styled } from '@mui/material';


const appstore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const playstore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

const DivContainer = styled(Box)(({theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#F54337',
  margin: '40px 20% 0 20%',
  height: '40px',
  alignItems: 'center',
  padding: '5px 60px 5px 60px',
  color: '#fff',
  [theme.breakpoints.down('md')]:{
    display: 'none'
  }
}));
const Image = styled('img')({
  height: 34,
});

const ContainerImg = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1rem;

`;


const HeaderSecond = () => {
  return (
    <DivContainer>
        <Typography style={{fontSize: '0.9rem'}}>For the best experience use inshorts app on your smartphone</Typography>
        <ContainerImg>
          <Image src={playstore} alt="playstore" />
          <Image src={appstore} alt="appstore" />
        </ContainerImg>
    </DivContainer>
  )
}

export default HeaderSecond;