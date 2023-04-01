import React, { useEffect, useState } from 'react'
import { ChatBox } from './ChatBox'
import './css/feed.css';
import Post from './Post';
import axios from 'axios';
import { Button } from '@mui/material';

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [clicked, setClicked] = useState('false');
  const [ text, setText] = useState('SEE MY QUESTIONS');
  const [colour, setColor] = useState('#38D2D2');
  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  
  const handleClick = () =>{
    if(clicked === 'true'){
      setClicked('false');
      setColor('#38D2D2');
      setText("SEE MY QUESTIONS");
    }
    else{
      setClicked("true");
      setColor('#1A5F7A');
      setText("SEE ALL QUESTIONS");
    }
  }

  return (
    <div className='feed'>
        <ChatBox/>
        <Button className='buttonChange' onClick={handleClick} sx={{backgroundColor:colour, marginBottom:3}}>{text}</Button>
        {posts.map((post, index) => (
        <Post key={index} click={clicked} post={post} />
      ))}
    </div>
  )
}
