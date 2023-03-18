import ReactPlayer from 'react-player';

export function CurrentLesson ({title, link}) {
 return (
    <>
        <h3 className='isHidden'>{title}</h3>
        <ReactPlayer
            url={`https://cors-proxy.fringe.zone/${link}`}
            controls={true}
            width="830px"
            height="470px"
        />
    </>
 )
};