import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Box, Card, CardHeader,IconButton, Avatar, CardMedia, CardContent, Typography, CardActions, Button, Snackbar, Alert, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { postDelete } from "../../apihelpers/helpers";
import Icon from "@mdi/react";
import {
  mdiCameraIris,
  mdiPinterest,
  mdiInstagram,
  mdiTwitter,
  mdiFacebook,
  mdiPen,
  mdiDotsVertical,
  mdiPencilOutline,
  mdiSkipPrevious,
  mdiSkipNext,
  mdiPlay,
  mdiPhone,
  mdiPaletteOutline,
  mdiMessageReply,
  mdiShareVariantOutline,
  mdiDotsHorizontal,
  mdiHeart,
  mdiGesture,
  mdiFolderEditOutline,
  mdiClockTimeFourOutline,
  mdiDelete,
  mdiPencil,
  mdiImageFilterDrama,
  mdiPlus,
  mdiMinus
} from "@mdi/js";


const DiaryItem = ({image, location, id, budget, mustVisit, user,name, point}) => {
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0
  };
  const [open, setOpen] = useState(false);
  console.log(mustVisit);
  const isLoggedInUser = () =>{
    if(localStorage.getItem("userId") === user){
      return true;
    }
    return false;
  }

  const handleDelete = () => {
    postDelete(id).then(data => console.log(data)).catch(err => console.log(err));
    setOpen(true);
  };
    return(
//       <Card sx={{ width: "80%", height: "auto", margin: 1, padding: 1, display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px #ccc" }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
//             {name.charAt(0)}
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             {<LocationOnIcon/>}
//           </IconButton>
//         }
//         title={location}
//         subheader={"Budget : "+budget}
//       />
//       {image.map((img)=><CardMedia
//         sx={{marginTop: "1%", height: "auto"}}
//         component="img"
//         height="194"
//         image={img}
//         // image="https://images.unsplash.com/photo-1677960192755-567ca956eba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1909&q=80"
//         alt="alt"
//       />)}
//       <CardContent>
//       <Typography paddingBottom={1} variant="h6" color="text.secondary">
//           Must Visit Places in {location} are: {mustVisit.join(" , ")}
//         </Typography>
//         <hr/>
//         <Box paddingTop={1} display="flex">
//           {/* <Typography width="170px" fontWeight={"bold"} variant="caption">{name}</Typography> */}
//           <Typography paddingTop={1} variant="body2" color="text.secondary">Points to remember while visiting {location} are: {point.join(" , ")}</Typography>
//         </Box>
        
//       </CardContent> 
// {      isLoggedInUser() && (
//     <CardActions sx={{marginLeft: 'auto'}}>
//         <IconButton LinkComponent={Link} to={`/posts/useId/${id}`} color="warning"><EditIcon/></IconButton>
//         <IconButton onClick={()=>setOpen(true)} color="error"><DeleteForeverIcon/></IconButton>
//       </CardActions> )}

//       <Snackbar open={open} autoHideDuration={6000} onClose={()=> setOpen(false)}>
//   <Alert onClose={handleDelete} severity="success" sx={{ width: '100%' }}>
//     This is a success message!
//   </Alert>
// </Snackbar>
//     </Card>
<Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "80%" }}>
<Card sx={CARD_PROPERTY}>
  <CardHeader
    sx={{ display: "flex", alignItems: "center" }}
    avatar={
      <Avatar
        sx={{ bgcolor: "red", width: 50, height: 50 }}
        aria-label="recipe"
      >
        {name.charAt(0)}
      </Avatar>
    }
    // action={
      // <IconButton aria-label="settings">
      //   <Icon path={mdiDotsVertical} size={1.3} color="#222" />
      // </IconButton>
    // }
    title={
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {location}
      </Typography>
    }
  />
    <Box
    sx={{
      display: "flex",
      gap: 0.5,
      mb: 0.5,
      justifyContent: "space-between"
    }}
  >
  {image && image.map((img) => (
                  <Box
                  sx={{
                    display: "flex"
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    // image="https://images.pexels.com/photos/2157826/pexels-photo-2157826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    image={img}
                  />
                </Box>
                ))}

    {/* <Box
      sx={{
        display: "flex"
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image="https://images.pexels.com/photos/2157826/pexels-photo-2157826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </Box>
    <Box sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        height="150"
        image="https://images.pexels.com/photos/3280524/pexels-photo-3280524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </Box>
    <Box sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        height="150"
        image="https://images.pexels.com/photos/2158469/pexels-photo-2158469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </Box>
  </Box>
  <Box
    sx={{
      display: "flex",
      gap: 0.5,
      justifyContent: "space-between"
    }}
  >
    <Box sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        width="100%"
        image="https://images.pexels.com/photos/33158/leaves-fall-colors-rainbow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </Box>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CardMedia
        component="img"
        width="100%"
        image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </Box> */}
  </Box>
  <Box
    sx={{
      bgcolor: "grey",
      p: 1,
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Icon path={mdiCameraIris} title="Camera" size={1.3} />
      <Typography sx={{ ml: 1, fontWeight: "bold" }} variant="span">
        {image.length}
      </Typography>
    </Box>
    {/* <Button variant="contained" color="success">
      Visit now
    </Button> */}
  </Box>
  <CardContent>
    <Typography
      gutterBottom
      variant="h4"
      sx={{ fontWeight: "bold" }}
      component="div"
    >
      Must Visit Places of {location} are:- 
    </Typography>
    <Typography variant="body1" color="text.secondary">
      
      {mustVisit.join(" , ")}
    </Typography>
    <Typography
      gutterBottom
      variant="body1"
      sx={{ mb: 1 }}
      component="div"
    >
      ...
    </Typography>
  </CardContent>
  {/* <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions> */}
  {      isLoggedInUser() && (
    <CardActions sx={{marginLeft: 'auto'}}>
        <IconButton LinkComponent={Link} to={`/posts/useId/${id}`} color="warning"><EditIcon/></IconButton>
        <IconButton onClick={()=>setOpen(true)} color="error"><DeleteForeverIcon/></IconButton>
      </CardActions> )}

      <Snackbar open={open} autoHideDuration={6000} onClose={()=> setOpen(false)}>
  <Alert onClose={handleDelete} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
</Snackbar>
</Card>
</Grid>
    )
}

export default DiaryItem;