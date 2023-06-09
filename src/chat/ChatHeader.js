import React, { useState } from 'react'
import logo from '../images/travel.png';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    ExpandMore,
  } from "@mui/icons-material";
  import { Avatar, Button, Input} from "@mui/material";
  import { Modal } from "react-responsive-modal";
import './css/ChatHeader.css';
import CloseIcon from '@mui/icons-material/Close';
import "react-responsive-modal/styles.css";
import axios from "axios";
import { useNavigate } from 'react-router';

export const ChatHeader = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId")
const [isModalOpen, setIsModalOpen] = useState(false);
const [inputUrl, setinputUrl] = useState("");

const [question, setQuestion] = useState("");
const Close = <CloseIcon />;

const handleSubmit = async () => {
  if (question !== "") {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      questionName: question,
      questionUrl: inputUrl,
      user: user,
    };
    await axios
      .post("/questions", body, config)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/chat";
      })
      .catch((e) => {
        console.log(e);
        alert("Error in adding question");
      });
  }
};

const MyChat = () => {
  navigate(`/chat/chat`);
} 
  return (
    <div className='qHeader'>
        {/* <div className='qHeder-content'> */}
            {/* <div className='qHeder_logo'>
                <img
                src={logo}
                width={50} height={50}
                alt='logo'
                />
            </div> */}
        {/* </div> */}
        {/* <div className="qHeader__icons">
          <div className="qHeader__icon" onClick={MyChat}>
            <HomeIcon />
          </div> */}
          {/* <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div> */}
        {/* </div> */}
        {/* <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div> */}
        <div className="qHeader__Rem">
          {/* <span>
            <Avatar />
          </span> */}

          <Button onClick={() => setIsModalOpen(true)}
          sx={{fontSize: 24}}
          >Add Question</Button>
          <Modal
            open = {isModalOpen}
            closeIcon = {Close}
            onClose = {() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className='modal_title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar className="avatar" />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type=" text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setinputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inclue a link that gives context"
                />
                {inputUrl!== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
    </div>
  )
}
