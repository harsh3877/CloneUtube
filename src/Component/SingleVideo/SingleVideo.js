import React from 'react'
// import { Link } from 'react-router-dom'
import './SingleVideo.css'
const SingleVideo = ({id, thumb_img, profile__img, title, channel__name, views, timestamps, video__duration}) => {
  return (
     
        <div className='col__4'>
        {
            // <Link to="/watch/:id">
        }
        <div className='thumbnail_img pointer relative'>
            <img src={thumb_img} className='thumb__img' alt=""/>
            <span className='video__duration absolute'>
                {video__duration}
            </span>
        </div>

        <div className='description__option d__flex'>
            <div className='profile_img'>
                <img src={profile__img} className='thumb__img profile__img' alt=""/>
            </div>
            <div className='description'>
                <span className='title'>
                    {title}
                </span>
                <span className='channelName'>
                    {channel__name}
                </span>
                <div className='viewsTimeStamp'>
                    <span className='view'> {views}</span> <span className='timestamp'> {timestamps} </span>
                </div>
            </div>
        </div>
        {

            // </Link>
        }
    </div>

     
     
  )
}

export default SingleVideo