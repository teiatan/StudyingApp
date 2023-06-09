import { Component } from "react";
import { CoursesItem } from "./coursesItem/CoursesItem";
import { Pagination } from "./pagination/Pagination";
import { Loader } from "components/loader/Loader";
import { Ul, H2 } from "./Courses.styled";

export class Courses extends Component {

    state = {
        shownCourses: [],
        currentPage: 1,
        totalPages: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.courses !== this.props.courses || prevState.currentPage !== this.state.currentPage) {
           this.cutCoursesArray(this.state.currentPage); 
        };  
    };

    cutCoursesArray(page) {
        const amountPerPage = 10;
        const arrayPerPage = [...this.props.courses];
        this.setState({shownCourses: arrayPerPage.slice((page-1+(amountPerPage-1)*(page-1)), (page+9+(amountPerPage-1)*(page-1))), totalPages: Math.ceil(this.props.courses.length/amountPerPage)});
    };

    onPageClickPagination = e => {
        const currentPage = Number(e.target.textContent);
        this.setState({currentPage: currentPage})
        window.scrollTo(0,0);
    };

    onNextClickPagination = () => {
        if(this.state.currentPage < this.state.totalPages) {
            this.setState(prevState => { 
                return({currentPage: prevState.currentPage+1})
            });
            window.scrollTo(0,0);
        };
        
    };

    onPrevClickPagination = () => {
        if(this.state.currentPage > 1) {
            this.setState(prevState => { 
                return({currentPage: prevState.currentPage-1})
            });
            window.scrollTo(0,0);
        };
        
    };

    render() {   
        return (
            <div className="container">
                <H2>Avaliable courses</H2>
                {this.props.loader===true && <Loader />}
                <Ul style={{display: "flex", flexWrap: "wrap"}}>
                    {this.state.shownCourses.map(course => {
                        let videoLink;
                        if(course.meta.courseVideoPreview) {videoLink = course.meta.courseVideoPreview.link;};
                        return (
                            <CoursesItem 
                                key={course.id}
                                onLearnMoreClick={this.props.onLearnMoreClick}
                                id={course.id}
                                title={course.title}
                                containsLockedLessons={course.containsLockedLessons}
                                duration={course.duration}
                                launchDate={course.launchDate}
                                lessonsCount={course.lessonsCount}
                                previewImageLink={course.previewImageLink}
                                previewImageAlt={course.meta.slug}
                                rating={course.rating}
                                tags={course.tags}
                                skills={course.meta.skills}
                                videoLink={videoLink}
                                
                            />
                        );
                    })}
                </Ul>
                {this.state.shownCourses.length !==0 && 
                    <Pagination 
                        totalPages={this.state.totalPages} 
                        onPageClick={this.onPageClickPagination}
                        onNextClick={this.onNextClickPagination} 
                        onPrevClick={this.onPrevClickPagination}
                        currentPage={this.state.currentPage}
                    />
                }
            </div>
        );
    };
};