export function CoursesItem ({id, title, duration, launchDate, containsLockedLessons, 
    lessonsCount, previewImageLink, previewImageAlt, rating, tags, skills}) {
    return (
        <li id={id} style={{height:300, width:300}}>
            <h3>{title}</h3>
            <p>Description: {}</p>
            {containsLockedLessons && <p>Contains locked lessons</p>}
            <p>Duration: {duration}minutes</p>
            <p>Launch date: {launchDate}</p>
            <p>Lesson count: {lessonsCount}</p>
            <img src={previewImageLink + '/cover.webp'} alt={previewImageAlt}></img>
            <p>Raiting: {rating}</p>
            <ul>Tags: 
                {tags.map(tag => {
                    return (
                        <li key={tag}>{tag}</li>
                    );
                })}
            </ul>
            {skills &&
                <ul>Skills: {skills.map(skill => {
                        return (
                            <li key={skill}>{skill}</li>
                        );
                    })}
                </ul>
            }
        </li>
    );
}