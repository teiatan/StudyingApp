import { CoursesItem } from "./coursesItem/CoursesItem";
import { Component } from "react";
import { Pagination } from "./pagination/Pagination";

export class Courses extends Component {

    state = {
        shownCourses: [],
        currentPage: 1,
        totalPages: 1,
    };

    componentDidUpdate(prevProps) {
        if(prevProps.courses !== this.props.courses) {
           this.cutCoursesArray(this.state.currentPage); 
        };
        
    };

    cutCoursesArray(page) {
        const amountPerPage = 10;
        const arrayPerPage = [...this.props.courses];
        this.setState({shownCourses: arrayPerPage.slice((page-1), (page+9)), totalPages: Math.ceil(this.props.courses.length/amountPerPage)});
    };

    onClickPagination = e => {
        this.setState({currentPage: e.target.textContent})
    };

    render() {   
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
                {this.state.shownCourses.length !==0 && <Pagination totalPages={this.state.totalPages} onClick={this.onClickPagination}/>}
            </div>
        );
    };
};