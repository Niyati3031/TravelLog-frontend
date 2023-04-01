import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Box, Card, CardHeader,IconButton, Avatar, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
import { likeImage, dislikeImage } from "../../../../apihelpers/helpers";

const DiaryItem = ({location, id, image, name, likes, dislike}) => {

  const [iconOneColor, setIconOneColor] = useState("black");
  const [iconTwoColor, setIconTwoColor] = useState("black");

  const temp = likes.length;
  const temp2 = dislike.length;
  const [like, setLike] = useState(temp);
  const [dislikes, setDislikes] = useState(temp2);

  // const like = {likes}
  const likeMe = () => {
    const userid = localStorage.getItem("userId");
    likeImage(id, userid).then((data) => {
      console.log(data);
      if(data.type === "added"){
        setLike(like+1);
        setIconOneColor("blue");
      }else if(data.type === "removed"){
        if(like!==0)setLike(like-1);
        setIconOneColor("black")
      }
      // setLike(like+1);
      // window.location.reload(false);
    })
    .catch(err => console.log(err));
  };
  const dislikeMe = () => {
    const userid = localStorage.getItem("userId");
    dislikeImage(id, userid).then((data) => {
      console.log(data);
      if(data.type === "added"){
        setDislikes(dislikes+1);
        setIconTwoColor("red");
      }else if(data.type === "removed"){
        if(dislikes!==0)setDislikes(dislikes-1);
        setIconTwoColor("black");
      }
      // window.location.reload(false);
    })
    .catch(err => console.log(err));
  };
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0
  };
  // console.log(dislike)
    return(
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "80%", marginTop: "2%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardHeader
                sx={{ display: "flex", alignItems: "center" }}
                // avatar={
                //   <Avatar
                //     sx={{ bgcolor: "red", width: 50, height: 50 }}
                //     aria-label="recipe"
                //   >
                //     R
                //   </Avatar>
                // }
                action={
                  <>
                  {/* <FavoriteBorderIcon
                  sx={{marginRight:3}}
                  /> */}
                  
                  <Button>
                  <ThumbUpIcon
                  sx={{color:iconOneColor}}
                  onClick={likeMe}
                  />
                  
                  </Button>
                  {like}
                  <Button>
                  <ThumbDownIcon
                  sx={{color: iconTwoColor}}
                  onClick={dislikeMe}
                  />
                  
                  </Button>
                  {dislikes}
                  </>
                  // <IconButton aria-label="settings">
                  //   <Icon path={ThumbUpIcon} size={1.3} color="#222" />
                  // </IconButton>
                }
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
                  p: 3,
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
              </Box>
            </Card>
          </Grid>
    )
}

export default DiaryItem;