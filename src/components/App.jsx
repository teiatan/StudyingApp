import { Component } from "react";
import { Header } from "./header/Header";
import { Courses } from "./courses/Courses";
import { Lessons } from "./lessons/Lessons";
import { getAllCourses, getOneCourse } from "service/api";

export class App extends Component {
  state = {
    currentPage: "courses",
    coursesData: [],
    oneCourseData: [],
    chosenCousreId: "",
    loader: true,
  };

  async componentDidMount() {
    if(this.state.currentPage==="courses") {
      const response = await getAllCourses();
      this.setState({coursesData: response, loader: false});
    };
    if(this.state.currentPage==="lessons" && this.state.chosenCousreId !== "") {
      const response = await getOneCourse(this.state.chosenCousreId);
      this.setState({oneCourseData: response});
      console.log(response.lessons);
    };
  };

  async componentDidUpdate(_,prevState) {
    if(this.state.currentPage !== prevState.currentPage) {
      if(this.state.currentPage==="courses") {
        const response = await getAllCourses();
        this.setState({coursesData: response, loader: false});
      };
      if(this.state.currentPage==="lessons" && this.state.chosenCousreId !== "") {
        const response = await getOneCourse(this.state.chosenCousreId);
        this.setState({oneCourseData: response});
        console.log(response);
      };
    };
  };

  changePage = async e => {
    this.setState({currentPage: e.target.id, loader:true});
  };

  learnMoreAboutCourse = (id) => {
    this.setState({chosenCousreId: id, currentPage: "lessons"})
  };

  render() {

    return(
    <>
      <Header onClick={this.changePage}/>
      <h1 className="container isHidden">Education for everyone!!!</h1>
      {this.state.currentPage==="courses" && (<Courses courses={this.state.coursesData} onLearnMoreClick={this.learnMoreAboutCourse} loader={this.state.loader}/>)
      }
      {this.state.currentPage==="lessons" && (<Lessons courseData={this.state.oneCourseData} courseId={this.state.chosenCousreId} changePageFunction={this.changePage}/>)}
    </>
    );
    
    
  }
};
