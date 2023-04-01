import { Avatar, Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './css/ChatBox.css';
import CloseIcon from '@mui/icons-material/Close';
import "react-responsive-modal/styles.css";
import axios from "axios";
import { useNavigate } from 'react-router';
import { Modal } from "react-responsive-modal";
import logo from 'src/images/logos/chatProfile.jpg';
import {
  AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@mui/icons-material";

export const ChatBox = () => {
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


  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
        src={logo}
        sx={{marginRight: 1}}
        />
        <div className="quoraBox__quora">
        <h6>What you want to ask the community? (You can add links to images as well)</h6>
        </div>
      </div>
      
        {/* <div className='qHeader'> */}
        <div className="qHeader__Rem">
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
              <Avatar src={logo} className="avatar" />
              {/* <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div> */}
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
        {/* </div> */}
        {/* <Button className='buttonChange' onClick={handleClick} sx={{backgroundColor:colour, color: 'white'}}>MY QUESTIONS</Button> */}
        </div>
    </div>
  )
}
