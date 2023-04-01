import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import DiaryItem from "./DiaryItem";
import { getAllPosts } from "../../apihelpers/helpers";

const Diaries = () => {
    const [posts, setPosts] = useState();
    useEffect(() => { 
        getAllPosts().then((data)=> setPosts(data?.posts))
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
            image={item.image}
            location={item.location}
            mustVisit={item.mustVisit}
            budget={item.budget}
            id={item._id}
            user={item.user}
            key={index}/>))}
    </Box>
}

export default Diaries;