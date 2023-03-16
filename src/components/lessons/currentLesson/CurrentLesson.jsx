import ReactPlayer from 'react-player';

export function CurrentLesson () {
    const aaaa = "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8"
 return (<>
    {/* <video
        src={`https://cors-proxy.fringe.zone/${aaaa}`}></video> */}
    {<ReactPlayer
        url={`https://cors-proxy.fringe.zone/${aaaa}`}
        controls={true}
    />}

</>
 )
};