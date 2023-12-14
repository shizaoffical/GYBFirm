import React from 'react'
import video from "../Images/video/Corporation.mp4"
import ThumbNail from "../Images/Image/HomePage-Video-ThumbNail-A.png"
function YoutubeVideo() {
  return (
   <>
   <div  className='youtube-video' > 
     <div className='youtube-video-container'>
      <video controls  className='youtube-video-tag' poster={ThumbNail} >
        <source  src={video} type='video/mp4' />
      </video>
    </div>
   </div>
  
   </>
    
  )
}

export default YoutubeVideo
