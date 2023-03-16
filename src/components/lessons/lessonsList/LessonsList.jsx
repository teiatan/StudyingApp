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

                    />
                );
            })}
        </ul>
    );

};