//import ReactPlayer from 'react-player';
import { Div } from './CurrentLesson.styled';
import Hls from 'hls.js';

export function CurrentLesson ({title, link, number, imgLink}) {
    const video = document.getElementById('video');
    const videoSrc = `https://cors-proxy.fringe.zone/${link}`;
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
    }
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
        /* poster={`${previewImageLink}/lesson-${number}.webp`} */
        width="750px"
        controls
        ></video>
        {}
    </Div>
 )
};