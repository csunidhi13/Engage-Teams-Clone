import React from 'react';
//import homeIcon from '../../assets/video-call.png';
//import { /*APP_NAME*/repoName } from '../../constants';
import DateTime from '../DateTime/DateTime';
import './Navbar.css';
//import StarIcon from '@material-ui/icons/Star';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title-div'>
        <img src="http://www.marshall.edu/it/files/microsoft-team-2019.png" alt='' />
        <h1>Microsoft Teams</h1>
      </div>
      <div className="timer">
              <h2><DateTime></DateTime></h2>
            </div>
      {/* <a className='repo' href={repoName} target='_blank' rel="noreferrer">
        <StarIcon className='rotate' />
        <div className='repo-text'>
          <p className='github-name'>Github</p>
          <p className='repo-name'>Give repo a star</p>
        </div>
      </a> */}
    </div>
  );
};

export default Navbar;
