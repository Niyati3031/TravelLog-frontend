import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './css/Post.css';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import {getUserDetails } from '../apihelpers/helpers';
import logo1 from 'src/images/logos/chatProfile.jpg';
import logo2 from 'src/images/logos/logo2.jpg';
import logo3 from 'src/images/logos/logo3.jpg';
import logo4 from 'src/images/logos/logo4.jpg';
import logo5 from 'src/images/logos/logo5.jpg';
import logo6 from 'src/images/logos/logo6.jpg';
import logo7 from 'src/images/logos/logo7.jpg';
import logo8 from 'src/images/logos/logo8.jpg';
import logo9 from 'src/images/logos/logo9.jpg';
import logo10 from 'src/images/logos/logo10.jpg';


let images = [logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}


function Post({ post, click }) {
  console.log(click);
  const user = localStorage.getItem("userId");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [ansusername, setAnsUsername] = useState("");
    const [answer, setAnswer] = useState("");

const Close = <CloseIcon />;

const handleQuill = (value) => {
  setAnswer(value);
};

const handleSubmit = async () => {
  if (post?._id && answer !== "") {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      answer: answer,
      questionId: post?._id,
      user: user,
    };
    await axios
      .post("/answers", body, config)
      .then((res) => {
        console.log(res.data);
        alert("Answer added succesfully");
        setIsModalOpen(false);
        window.location.href = "/chat";
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

const Username = (id) => {
  console.log(id);
  getUserDetails(id).then(data => {
    // console.log(data.user.name);
    setAnsUsername(data.user.name);
    return (data.user.name);
    
  }).catch(err => console.log(err));
}

useEffect(() => {
  axios.get(`/users/${post?.user}`)
    .then((res) => {
      console.log(res.data.user.name);
      setUsername(res.data.user.name);
    })
    .catch((e) => {
      console.log(e);
    });
}, []);

const max =images.length -1;

  return (
    <>
        {click ==='true' && post?.user && post?.user === user && (
      <div className="post">
        <div className="post__info">
        <Avatar
        src={images[Math.floor(Math.random() * (max + 1))]}
        />
        <h4>{username}</h4>

        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
          style={{backgroundColor: '#1A5F7A'}}
            onClick={() => {
              setIsModalOpen(true);
              console.log(post?._id);
            }}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">{username}</span> on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button  type="submit" onClick={handleSubmit} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      {/* <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div> */}
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>

      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        {post?.allAnswers?.map((_a) => (
          <>
          {Username(_a?.user)}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >
                <Avatar 
                src={images[Math.floor(Math.random() * (max + 1))]}
                />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{ansusername}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
            </div>
          </>
        ))}
      </div>
      </div>
      )}

      {
        click === 'false' && (
          <>
           <div className="post">
           <div className="post__info">
        <Avatar 
        src={images[Math.floor(Math.random() * (max + 1))]}
        />
        <h4>{username}</h4>

        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              console.log(post?._id);
            }}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">{username}</span> on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button  type="submit" onClick={handleSubmit} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      {/* <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div> */}
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>

      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        {post?.allAnswers?.map((_a) => (
          <>
          {_a?.user && Username(_a?.user)}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >
                <Avatar 
                src={images[Math.floor(Math.random() * (max + 1))]}
                />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{ansusername}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
            </div>
            </>
        ))}
           </div>
           </div>
          </>
        )
      }
    </>
  )
}

export default Post
