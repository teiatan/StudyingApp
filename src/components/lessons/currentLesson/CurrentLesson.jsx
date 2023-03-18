import ReactPlayer from 'react-player';

export function CurrentLesson ({title, link}) {
    const aaaa = "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8"
 return (
    <>
        <h3>{title}</h3>
        <ReactPlayer
            url={`https://cors-proxy.fringe.zone/${aaaa}`}
            controls={true}
            width="830px"
            height="470px"
        />
    </>
 )
};