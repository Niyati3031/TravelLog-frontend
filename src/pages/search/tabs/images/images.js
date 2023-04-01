import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import DiaryItem from "./DiaryItem";
import { getAllPosts} from "../../../../apihelpers/helpers";

const Images = () => {
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
            {posts && posts.map((item, index) =>(
            <DiaryItem 
            location={item.location}
            image={item.image}
            id={item._id}
            likes={item.likesImage}
            dislike={item.dislikesImage}
            key={index}/>))}
    </Box>
}

export default Images;