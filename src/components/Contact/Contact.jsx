import React from 'react'
import "./Contact.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div className='joinemail'>
    <div className="wrapper">
        <span>Join Our Email List: </span>
        <div className="mail">
            <input type="email" placeholder='Enter Your E-mail' />
            <button>Join Us</button>
        </div>
        <div className="icons">
            <FacebookOutlinedIcon />
            <InstagramIcon/>
            <PinterestIcon />
            <TwitterIcon />
        </div>
    </div>
    </div>
  )
}

export default Contact