import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Box, Card, CardHeader,IconButton, Avatar, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";



const DiaryItem = ({image, location, id, budget, mustVisit, user}) => {
    return(
      <Card sx={{ width: "50%", height: "65vh", margin: 1, padding: 1, display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px #ccc" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<LocationOnIcon/>}
          </IconButton>
        }
        header={location}
        subheader={budget}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        // image="https://images.unsplash.com/photo-1677960192755-567ca956eba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1909&q=80"
        alt="Alt"
      />
      <CardContent>
      <Typography paddingBottom={1} variant="h6" color="text.secondary">
          This impressive paella 
        </Typography>
        <hr/>
        <Box paddingTop={1} display="flex">
          <Typography width="170px" fontWeight={"bold"} variant="caption">Niyati Soni</Typography>
          <Typography paddingTop={1} variant="body2" color="text.secondary">
           {mustVisit.join('\n')}
          </Typography>
        </Box>
        
      </CardContent>
      <CardActions sx={{marginLeft: 'auto'}}>
        <IconButton color="warning"><EditIcon/></IconButton>
        <IconButton color="error"><DeleteForeverIcon/></IconButton>
      </CardActions>
    </Card>
    )
}

export default DiaryItem;