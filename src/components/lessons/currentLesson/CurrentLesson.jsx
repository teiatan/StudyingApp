//import ReactPlayer from 'react-player';
import { Div } from './CurrentLesson.styled';
import Hls from 'hls.js';
import { useEffect } from "react";
import { Button, DivControls } from './CurrentLesson.styled';

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

          const changeSpeed = e => {
            
            if(e.code === 'Digit1' || e.code === 'Numpad1'){
              video.playbackRate = 2.0;
            };
            if(e.code === 'Digit2' || e.code === 'Numpad2'){
              video.playbackRate = 0.5;
            };
            if(e.code === 'Digit3' || e.code === 'Numpad3'){
              video.playbackRate = 1;
            };
          };

          window.addEventListener('keydown', changeSpeed);
          video.addEventListener('play', onPlay);
          video.addEventListener('pause', onTimeUpdate);
    
          return () => {
            window.removeEventListener('keydown', changeSpeed);
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
        poster={`${imgLink}/lesson-${number}.webp`}
        width="100%"
        controls
        
        ></video>
        <DivControls>
          <Button onClick={()=>pictureInPictureData(videoSrc, progress)}>start picture in picture</Button>
          <p>Press 1 to make video 2x faster<br></br> Press 2 to make video 0.5x slower<br></br> Press 3 to play video in normal speed</p>
        </DivControls>
    </Div>
 )
};