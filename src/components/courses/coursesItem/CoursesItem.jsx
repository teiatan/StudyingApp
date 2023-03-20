import { useState, useEffect } from 'react';
import Hls from 'hls.js';
import { Li, Img, Button } from './CoursesItem.styled';

export function CoursesItem ({id, onLearnMoreClick, title, duration, launchDate, containsLockedLessons, 
    lessonsCount, previewImageLink, previewImageAlt, rating, tags, skills, videoLink}) {

    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (Hls.isSupported()) {
            const video = document.getElementById(`course${id}video`);
            const link = `https://cors-proxy.fringe.zone/${videoLink}`;
            const hls = new Hls();
            hls.loadSource(link);
            hls.attachMedia(video);
        };
    }, [hovered, id, videoLink]);
    


    return (
        <Li id={id} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
            <Button onClick={() => onLearnMoreClick(id)}>Learn more...</Button>
            {hovered ?
            <video width="100%" id={`course${id}video`} autoPlay muted></video>
            :
            <Img src={previewImageLink + '/cover.webp'} alt={previewImageAlt}></Img>
            }
            <h3>{title}</h3>
            <p className='isHidden'>Description: {}</p>
            {containsLockedLessons && <p className='isHidden'>Contains locked lessons</p>}
            <p className='isHidden'>Duration: {duration}minutes</p>
            <p className='isHidden'>Launch date: {launchDate}</p>
            <p>Lesson count: {lessonsCount}</p>
            <p>Raiting: {rating}</p>
            <ul className='isHidden'>Tags: 
                {tags.map(tag => {
                    return (
                        <li key={tag}>{tag}</li>
                    );
                })}
            </ul>
            {skills &&
                <ul className='isHidden'>Skills: {skills.map(skill => {
                        return (
                            <li key={skill}>{skill}</li>
                        );
                    })}
                </ul>
            }
        </Li>
    );
}