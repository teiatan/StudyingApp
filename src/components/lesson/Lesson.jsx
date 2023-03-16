import { Component } from "react";
import { LessonsList } from "./lessonsList/LessonsList";
import { CurrentLesson } from "./currentLesson/CurrentLesson";

export class Lesson extends Component {

    

    render() {
        return (
            <>
                <h2>Lesson section</h2>
                <CurrentLesson />
                <LessonsList />

            </>
        );
    };
};