import { Component } from "react";
import { LessonsList } from "./lessonsList/LessonsList";
import { CurrentLesson } from "./currentLesson/CurrentLesson";
import { Div } from "./Lessons.styled";

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
                <h2>{title}</h2>
                <p>Description: {description}</p>
                {containsLockedLessons && <p>Contains locked lessons</p>}
                <p>Duration: {duration}minutes</p>
                <p>Launch date: {launchDate}</p>
                <p>Lesson count: {lessons.length}</p>
                <img src={previewImageLink + '/cover.webp'} alt={previewImageAlt}></img>
                <p>Raiting: {rating}</p>
                <ul>Tags: 
                    {tags.map(tag => {
                        return (
                            <li key={tag}>{tag}</li>
                        );
                    })}
                </ul>
                <Div>
                    <CurrentLesson />
                    <LessonsList lessons={lessons}/>
                </Div>
            </>)}
            </div>
        );
    }; 
};