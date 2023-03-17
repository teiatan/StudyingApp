import { Component } from "react";
import { LessonsList } from "./lessonsList/LessonsList";
import { CurrentLesson } from "./currentLesson/CurrentLesson";
import { PlockedLessons, ImgCourse, DivLessons, DivCourse, SpanTitle, H2, PDescription } from "./Lessons.styled";

export class Lesson extends Component {

    state = {
        currentLessonNumber: 1,
        currentLessonId: Object.keys(this.props.courseData).length !==0 ? this.props.courseData.lessons[0].id : "",
        currentLessonLink: Object.keys(this.props.courseData).length !==0 ? this.props.courseData.lessons[0].link : "",
    };
     
    render() {
    const {title, description, containsLockedLessons, duration, launchDate, lessons, previewImageLink, previewImageAlt, rating, tags} = this.props.courseData;

        return (
            <div className="container">
            {Object.keys(this.props.courseData).length !==0
            &&
            (<>
                <DivCourse>
                    {/* <p style={{backgroundImage: `${previewImageLink}/cover.webp`, height: "120px"}}></p> */}
                    <ImgCourse src={previewImageLink + '/cover.webp'} alt={previewImageAlt}></ImgCourse>
                    <H2>Course: <SpanTitle>{title}</SpanTitle></H2>
                    <PDescription>{description}</PDescription>
                    {containsLockedLessons && <PlockedLessons>Contains locked lessons</PlockedLessons>}
                    <p className="isHidden">Duration: {duration}   seconds</p>
                    <p className="isHidden">Launch date: {launchDate}</p>
                    <p className="isHidden">Lesson count: {lessons.length}</p>
                    <p className="isHidden">Raiting: {rating}</p>
                    <ul className="isHidden">Tags: 
                        {tags.map(tag => {
                            return (
                                <li key={tag}>{tag}</li>
                            );
                        })}
                    </ul>
                    
                </DivCourse>
                <DivLessons>
                    <CurrentLesson />
                    <LessonsList lessons={lessons}/>
                </DivLessons>
            </>)}
            </div>
        );
    }; 
};