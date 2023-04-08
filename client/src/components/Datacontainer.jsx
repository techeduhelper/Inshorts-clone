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
    <Card>
        <CardContent>
                <Grid container>
                    <Grid item lg={5} sm ={5} xs={12}>
                        <Image src={data.url} alt="new_image" />
                    </Grid>
                    <FlexGrid item lg={7} sm ={7} md={7} xs={12}>
                        <Typography>
                            {data.title}
                        </Typography>
                        <Typography>
                            {data.description}
                        </Typography>
                        <Typography>
                            {data.timestamp}
                        </Typography>
                    </FlexGrid>
                </Grid>
        </CardContent>
    </Card>
  )
}

export default Datacontainer