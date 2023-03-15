import { CoursesItem } from "./coursesItem/CoursesItem";
import { Component } from "react";
import { Pagination } from "./pagination/Pagination";

export class Courses extends Component {

    state = {
        totalCourses: this.props.courses,
        shownCourses: [],
        currentPage: 1,
        totalPages: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.courses !== this.props.courses) {
           this.cutCoursesArray(this.state.currentPage); 
        };
        
    };

    cutCoursesArray(page) {
        const coursesPerPage = [...this.props.courses];
        this.setState({shownCourses: coursesPerPage.slice((page-1), (page+9))});
    };

    render() {
    //const courses = this.cutCoursesArray();    
        return (
            <div>
                <h2>Courses section</h2>
                <ul style={{display: "flex", flexWrap: "wrap"}}>
                    {this.state.shownCourses.map(course => {
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
                </ul>
                {<Pagination pages={this.props.courses}/>}
            </div>
        );
    };
};