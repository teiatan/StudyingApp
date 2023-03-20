//import ReactPlayer from 'react-player';
import { Div } from './CurrentLesson.styled';
import Hls from 'hls.js';
import { useEffect } from "react";
import { Button } from './CurrentLesson.styled';

export function CurrentLesson ({title, link, number, imgLink, videoTime, getTime, pictureInPictureData}) {
    const video = document.getElementById('video');    
    const videoSrc = `https://cors-proxy.fringe.zone/${link}`;
    let progress = localStorage.getItem('videoTime');
    if(!progress) {progress=0};
    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
          if (!video) return;

          
          
          const onTimeUpdate = () => {
            const time = video.currentTime;
            localStorage.setItem('videoTime', time);
          };
    
          const onPlay = () => {
            video.currentTime = progress;
          };
    
          video.addEventListener('play', onPlay);
          video.addEventListener('pause', onTimeUpdate);
    
          return () => {
            video.removeEventListener('pause', onTimeUpdate);
            video.removeEventListener('play', onPlay);
          };
        };
      }, [progress, video, videoSrc]);

 return (
    <Div>
        <h3>Lesson {number} : {title}</h3>
        {/* <ReactPlayer
            url={`https://cors-proxy.fringe.zone/${link}`}
            controls={true}
            width="750px"
            height="auto"
            light={<img src={imgLink} alt='preview' />}
        /> */}
        <video id='video'
        /* src={`https://cors-proxy.fringe.zone/${link}`} */
        poster={`${imgLink}/lesson-${number}.webp`}
        width="100%"
        controls
        
        ></video>
        <Button onClick={()=>pictureInPictureData(videoSrc, progress)}>start picture in picture</Button>
        {}
    </Div>
 )
};