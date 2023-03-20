import Hls from 'hls.js';
import { Div } from "./PictureInPicture.styled";

export function PictureInPicture ({data}) {
    if (Hls.isSupported()) {
        const video = document.getElementById(`pictureInpictureVideo`);
        const link = data;
        const hls = new Hls();
        hls.loadSource(link);
        hls.attachMedia(video);
    };

    return(
        <Div>
            <video width="100%" autoPlay id='pictureInpictureVideo'></video>
        </Div>
    );
};