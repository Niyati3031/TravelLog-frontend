import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import DiaryItem from "./DiaryItem";
import { getAllPosts } from "../../../../apihelpers/helpers";
import { Typography } from "@mui/material";

const Market = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const location = queryParameters.get("loc");
    console.log(location);
    const [posts, setPosts] = useState();
    useEffect(() => { 
        getAllPosts(location).then((data)=> setPosts(data?.post))
        .catch(err => console.log(err));
    },[])
    return <Box
        display="flex"
        flexDirection={"column"}
        padding={3}
        justifyContent="center"
        alignItems={"center"}>
            {" "}
            <Typography
                  variant="h4"
                  color="black"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  MARKETS TO EXPLORE:- 
                </Typography>
            {posts && posts.map((item, index) =>(
            <DiaryItem 
            location={item.location}
            market={item.market}
            likes={item.likesMarket}
            dislike={item.dislikesMarket}
            id={item._id}
            key={index}/>))}
    </Box>
}

export default Market;