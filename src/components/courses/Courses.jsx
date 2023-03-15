import { CoursesItem } from "./coursesItem/CoursesItem";

export function Courses({courses}) {
    return (
        <div>
            <h2>Courses section</h2>
            {courses.map(course => {
                return (
                    <CoursesItem 
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        /* description={} */
                        containsLockedLessons={course.containsLockedLessons}
                        duration={course.duration}
                        launchDate={course.launchDate}
                        lessonsCount={course.lessonsCount}
                        previewImageLink={course.previewImageLink}
                        previewImageAlt={course.meta.slug}
                        rating={course.rating}
                        tags={course.tags}
                        skills={course.meta.skills}
                        
                    />
                );
            })}
        </div>
    );
};