import { LessonListItem } from "../lessonListItem/LessonListItem";
import { Ul } from "./LessonsList.styled";

export function LessonsList ({lessons, onClick}) {
    return (
        <Ul>
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
                        onClick={onClick}
                    />
                );
            })}
        </Ul>
    );

};