import { LessonListItem } from "../lessonListItem/LessonListItem";

export function LessonsList ({lessons}) {
    return (
        <ul> List of lessons
            {lessons && lessons.map(lesson => {
                return(
                    <LessonListItem 
                        key={lesson.id}
                        id={lesson.id}
                        duration={lesson.duration}
                        link={lesson.link}
                        order={lesson.order}
                        previewImageLink={lesson.previewImageLink}
                        status={lesson.status}
                        title={lesson.title}
                        type={lesson.type}

                    />
                );
            })}
        </ul>
    );

};