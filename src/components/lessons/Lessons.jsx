import { Component } from "react";
import { LessonsList } from "./lessonsList/LessonsList";
import { CurrentLesson } from "./currentLesson/CurrentLesson";

export class Lesson extends Component {

     

    render() {
    const {title, description, containsLockedLessons, duration, launchDate, lessons, previewImageLink, previewImageAlt, rating, tags} = this.props.courseData;

        return (
            <>
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
                
                <CurrentLesson />
                <LessonsList />

            </>)}</>
        );
    }; 
};