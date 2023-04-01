import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import DiaryItem from "./DiaryItem";
import { getAllPost } from "../../apihelpers/helpers";

const MyPosts = () => {
    const [posts, setPosts] = useState();
    useEffect(() => { 
        getAllPost().then((data)=> setPosts(data?.posts))
        .catch(err => console.log(err));
    },[])
    return <Box
        display="flex"
        flexDirection={"column"}
        padding={3}
        justifyContent="center"
        alignItems={"center"}>
            {" "}
            {posts && posts.map((item, index) =>(
            <DiaryItem 
            location={item.location}
            image = {item.image}
            mustVisit={item.mustVisit}
            point={item.point}
            budget={item.budget}
            user={item.user}
            id={item._id}
            key={index}/>))}
    </Box>
}

export default MyPosts;