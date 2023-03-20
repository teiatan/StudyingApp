import Hls from 'hls.js';
import { Div } from "./PictureInPicture.styled";

export function PictureInPicture ({data}) {
    if (Hls.isSupported()) {
        const video = document.getElementById(`pictureInpictureVideo`);
        const link = data.link;
        //const progress = data.progress;
        const hls = new Hls();
        hls.loadSource(link);
        hls.attachMedia(video);
    };

    return(
        <Div>
            <video controls width="100%" autoPlay id='pictureInpictureVideo'></video>
        </Div>
    );
};