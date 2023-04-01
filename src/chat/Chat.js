import React from 'react'
import { ChatHeader } from './ChatHeader'
import { Feed } from './Feed'
import './css/Chat.css';
import { Route, Router, Routes } from 'react-router';
import logo from 'D:/Travel/travel/src/images/chat_back.jpg';

export const Chat = () => {
  return (
    <div className="quora" style={{}}>
      {/* <ChatHeader /> */}
      <div className="quora__contents">
        <div className="quora__content">
            <Routes>
              <Route exact path='/' element={<Feed/>}></Route>
              {/* <Route path='/chat' element={<MyChat/>}></Route> */}
            </Routes>
        </div>
      </div>
    </div>
  )
}
