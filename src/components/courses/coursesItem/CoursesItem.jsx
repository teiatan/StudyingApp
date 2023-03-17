import { Li, Img, Button } from './CoursesItem.styled';

export function CoursesItem ({id, title, duration, launchDate, containsLockedLessons, 
    lessonsCount, previewImageLink, previewImageAlt, rating, tags, skills}) {
    return (
        <Li id={id}>
            <Button>Learn more...</Button>
            <Img src={previewImageLink + '/cover.webp'} alt={previewImageAlt}></Img>
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