import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../../apihelpers/helpers";
import DiaryItem from "../myPosts/DiaryItem";
import MyPosts from "../myPosts/myPosts";
import {authActions } from "../../store";
import { useNavigate } from "react-router";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState();
    useEffect(()=> {
        getUserDetail().then(data => setUser(data.user)).catch(err => console.log(err));

    },[]);

    const handleClick = () =>{
        dispatch(authActions.logout());
        localStorage.removeItem("userId");
        navigate("/")
    }

    return (
        <div style={{background: '#CBE4DE'}}>
            {user && <Box display="flex" sx={{position: '-webkit-sticky',
  position: 'sticky',
  top: '0px'}}>
            <center>
            <Typography textAlign={'center'} variant="h5" padding={2}>User Profile</Typography>
                <Card sx={{display: 'block',
    width: '12vw',
    transitionDuration: '0.3s',
    height: 'auto', maxWidth: 345, marginLeft: "5%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=740&t=st=1678632509~exp=1678633109~hmac=b6a0641c371ba3ba27896bf392a8a4072bca86912b19c2d0abd80dc7f5579c41"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}<br></br>
            <Button onClick={handleClick} sx={{marginTop: "10px",mr:'auto', width:"15%"}} color="warning" variant="contained">Logout</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </center>
                
    
                <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems={'center'} width="80%">
                <Typography textAlign={'center'} variant="h3" padding={2}>My Posts</Typography>
                    {user.posts.map((post, index)=><DiaryItem
                    location={post.location}
                    image = {post.image}
                    mustVisit={post.mustVisit}
                    point={post.point}
                    budget={post.budget}
                    user={user._id}
                    name={user.name}
                    id={post._id}
                    key={index}
                    />)}
                </Box>
            </Box>}
            {/* <MyPosts/> */}
        </div>
    )
}

export default Profile;