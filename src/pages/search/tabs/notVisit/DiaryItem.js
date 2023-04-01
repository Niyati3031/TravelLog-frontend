import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Box, Card, CardHeader,IconButton, Avatar, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {likeAvoid, dislikeAvoid } from "../../../../apihelpers/helpers";

const DiaryItem = ({location, id,notVisit, likes, dislike}) => {
  const [iconOneColor, setIconOneColor] = useState("black");
  const [iconTwoColor, setIconTwoColor] = useState("black");

  const temp = likes.length;
  const temp2 = dislike.length;
  const [like, setLike] = useState(temp);
  const [dislikes, setDislikes] = useState(temp2);

  // const like = {likes}
  const likeMe = () => {
    const userid = localStorage.getItem("userId");
    likeAvoid(id, userid).then((data) => {
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
    dislikeAvoid(id, userid).then((data) => {
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
    return(
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "500px" , marginTop: "2%"}}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
              
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
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
                </Box>
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  {location}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                 {notVisit.join(" , ")}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
              </Box>
            </Card>
          </Grid>
    )
}

export default DiaryItem;