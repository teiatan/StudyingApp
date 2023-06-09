import { Component } from "react";
import { LessonsList } from "./lessonsList/LessonsList";
import { CurrentLesson } from "./currentLesson/CurrentLesson";
import { LessonsPlug } from "./lessonsPlug/LessonsPlug";
import { Loader } from "components/loader/Loader";
import { PlockedLessons, ImgCourse, DivLessons, DivCourse, SpanTitle, H2, PDescription } from "./Lessons.styled";

export class Lessons extends Component {

    state = {
        currentLessonNumber: 1,
        currentLessonTitle: "",
        currentLessonId: "",
        currentLessonLink: "",
        currentLessonPrewievImage: "",
    };

    componentDidMount() {
        const currentLessonId = localStorage.getItem('currentLessonId');
        if(currentLessonId) {
          this.setState({
            currentLessonId: currentLessonId,
            currentLessonNumber: localStorage.getItem('currentLessonNumber'),
            currentLessonTitle: localStorage.getItem('currentLessonTitle'),
            currentLessonLink: localStorage.getItem('currentLessonLink'),
            currentLessonPrewievImage: localStorage.getItem('currentLessonPrewievImage'),
          })
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.courseData.id !== this.props.courseData.id ) {
            this.setState({
            currentLessonTitle: this.props.courseData.lessons[0].title,
            currentLessonId: this.props.courseData.lessons[0].id,
            currentLessonLink: this.props.courseData.lessons[0].link,
            currentLessonPrewievImage: `${this.props.courseData.lessons[0].previewImageLink}/lesson-1.webp`,
            currentLessonNumber: 1
        })
        };

        if(prevState.currentLessonId !== this.state.currentLessonId) {
            localStorage.setItem('currentLessonNumber', this.state.currentLessonNumber);
            localStorage.setItem('currentLessonTitle', this.state.currentLessonTitle);
            localStorage.setItem('currentLessonId', this.state.currentLessonId);
            localStorage.setItem('currentLessonLink', this.state.currentLessonLink);
            localStorage.setItem('currentLessonPrewievImage', this.state.currentLessonPrewievImage);
        };
    };

    chooseLessonByClick = (number, link, id, title, status, imgLink) => {
        if(status !== 'locked'){
            this.setState({currentLessonNumber:number, currentLessonId: id, currentLessonLink: link, currentLessonTitle: title, currentLessonPrewievImage: imgLink});
        };
        localStorage.setItem('videoTime', 0);
    };

    getCurrentTimeOfPlayedVideo = (time) => {
        localStorage.setItem('videoTime', time);
    };
     
    render() {
    const {title, description, containsLockedLessons, duration, launchDate, lessons, previewImageLink, previewImageAlt, rating, tags} = this.props.courseData;

        return (
            <div className="container">
            
            {Object.keys(this.props.courseData).length ===0
            ?
            this.props.courseId==="" ? <LessonsPlug onClick={this.props.changePageFunction}/> : <Loader/>
            :
            <>
                <DivCourse>
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
                    <CurrentLesson 
                        number={this.state.currentLessonNumber} 
                        id={this.state.currentLessonId} 
                        link={this.state.currentLessonLink}
                        title={this.state.currentLessonTitle}
                        imgLink={this.state.currentLessonPrewievImage}
                        videoTime={this.state.videoTime}
                        getTime={this.getCurrentTimeOfPlayedVideo}
                        pictureInPictureData={this.props.pictureInPictureData}
                    />
                    <LessonsList lessons={lessons} onClick={this.chooseLessonByClick}/>
                </DivLessons>
            </>}
            </div>
        );
    }; 
};
