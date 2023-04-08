import styled from '@emotion/styled'
import { Card ,CardContent, Grid, Typography } from '@mui/material'
import React from 'react'


const Image = styled('img')({
    width: '100%',
    height: 290,
    borderRadius: 5,
    objectFit: 'cover'
})

const FlexGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0.7rem;
`



const Datacontainer = ({data}) => {
  return (
    <Card style={{marginTop: '20px', boxShadow:'box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'}}>
        <CardContent style={{padding:'0.7rem'}}>
                <Grid container>
                    <Grid item lg={5} sm ={5} xs={12}>
                        <Image src={data.url} alt="new_image" />
                    </Grid>
                    <FlexGrid item lg={7} sm ={7} md={7} xs={12}>
                        <Typography style={{fontSize: '1.5rem', fontWeight:'700'}}>
                            {data.title}
                        </Typography>
                        <Typography style={{fontSize:'0.8rem'}}>
                            <b>Short</b> by {data.author} / {new Date(data.timestamp).toDateString()}
                        </Typography>
                        <Typography style={{textAlign:'justify'}}>
                            {data.description}
                        </Typography>
                        <Typography>
                            read more at <a style={{textDecoration: 'none',fontWeight: 'bold'}} href={data.link} target='_blank'>{data.publisher}</a>
                        </Typography>
                    </FlexGrid>
                </Grid>
        </CardContent>
    </Card>
  )
}

export default Datacontainer