import ReactPlayer from 'react-player';
import { Div } from './CurrentLesson.styled';

export function CurrentLesson ({title, link, number}) {
 return (
    <Div>
        <h3>Lesson {number} : {title}</h3>
        <ReactPlayer
            url={`https://cors-proxy.fringe.zone/${link}`}
            controls={true}
            width="750px"
            height="auto"
        />
    </Div>
 )
};