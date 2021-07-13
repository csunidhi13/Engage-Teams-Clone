// import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
import React, { useContext, /*useState,*/ useEffect } from 'react';
import { SocketContext } from '../../SocketContext';
import { VideoCallOutlined } from "@material-ui/icons";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import './Home.css';
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
//import homeIcon from '../../assets/video-call.png';
// import homeIcon1 from '../../assets/home.png';
// import noteIcon from '../../assets/note2.png';
// import homeVideo from '../../assets/homeVideo1.mp4';
// import ChatIcon from '@material-ui/icons/Chat';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
// import DuoIcon from '@material-ui/icons/Duo';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import Navbar from '../Navbar/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';


const Home = (props) => {
  const paramsCode = props.location.search;

  const { meetingCode, setMeetingCode, setNewMeet } = useContext(SocketContext);

  useEffect(() => {
    if (paramsCode.length) {
      if (paramsCode.substring(0, 5) === '?ref=') return; 
    }
    setNewMeet(null);
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <div className='body-div'>
        <div className='flex-box'>
          <div className='left-div'>
            <div className='contents'>
              <div className='start-meet'> 
                        <h2 class="hero__title">
            Start a new meeting instantly or join one!
          </h2>             
                <Link
                  className='home-btn'
                  startIcon={<VideoCallOutlined/>}
                  to='join'
                  onClick={() => {
                    setNewMeet(true);
                  }}
                >                                 
                  NEW MEETING                 
                </Link>
              </div>
              <div className='join-meet'>
              {/* <Keyboard className="icon" /> */}
              <input                
                  type='text'
                  placeholder='Enter meeting code'                  
                  value={meetingCode || ''}
                  onChange={(e) => {
                    setMeetingCode(e.target.value);
                  }}
                  />
                  <button
                  className='home-btn'
                  startIcon={<GroupAddIcon/>}
                  onClick={() => {
                    if (!meetingCode || meetingCode.trim().length === 0) {
                      message.error('Please enter the meeting code');
                      return;
                    }
                    props.history.push('join');
                  }}
                >                 
                  JOIN MEETING
                </button>                 
              </div>
              {/* <div className='features'>
                <h1>Features</h1>
                <div className='grid-div'>
                  <DuoIcon />
                  <p>1:1 Video chat</p>
                </div>
                <div className='grid-div'>
                  <SurroundSoundIcon />
                  <p>Live Editor for interview</p>
                </div>
                <div className='grid-div'>
                  <EventNoteIcon />
                  <p>Notes</p>
                </div>
                <div className='grid-div'>
                  <ChatIcon />
                  <p>Real time Chat</p>
                </div>
              </div>
              <img src={homeIcon1} alt='' className='chat-img' />
              <img src={noteIcon} alt='' className='note-img' /> */}
 

            </div>
          </div>
          <div className='right-div'>
            {/* <img src={homeIcon} alt='' /> */}
            {/* <video
              src={homeVideo}
              id='video'
              alt='video'
              autoPlay
              muted
              loop
            ></video> */}
             <img
          className="hero__image"
          src="https://cdn.dribbble.com/users/1467568/screenshots/3439069/videochat4.gif"
          alt="Feature IMG"
        />
          </div>
        </div>
      </div>
      <div class="grid-container">
      <div class="row">
      <div class="grid-item">
  <div class="column">
    <div class="card">
    <img class="card-img-top" src="https://cdn.dribbble.com/users/381118/screenshots/3536836/meditation.gif" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Meditation</h5>
    <p class="card-text">Heading for an important interview? Clear your head and take a break from the stress of long meetings.</p>
    <a href="https://engage-teams-meditation.netlify.app/" class="btn btn-primary link">Meditate Now</a>
  </div>
  </div>
  </div>
  </div>
  <div class="grid-item">

  <div class="column">
    <div class="card">
    <img class="card-img-top" src="https://cdn.dribbble.com/users/2759030/screenshots/6328881/character-houding_dribbble.gif" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Posture Checker</h5>
    <p class="card-text">Long meetings taking a toll on your back? Do a Quick Posture Check before you hop into you next one!</p>
    <a href="https://engage-meet-posturechecker.netlify.app/" class="btn btn-primary">Check Posture</a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
      <Footer />
      {/* <Features /> */}
      <Footer />
      
    </div>
  );
};

export default Home;
