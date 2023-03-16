import { Component } from "react";
import { Header } from "./header/Header";
import { Courses } from "./courses/Courses";
import { Lesson } from "./lesson/Lesson";
import { getAllCourses, getOneCourse } from "service/api";

export class App extends Component {
  state = {
    currentPage: "courses",
    coursesData: [],
    chosenCousreId: "352be3c6-848b-4c19-9e7d-54fe68fef183",
  };

  changePage = async e => {
    this.setState({currentPage: e.target.id});
  };

  async componentDidMount() {
    if(this.state.currentPage==="courses") {
      const response = await getAllCourses();
      this.setState({coursesData: response});
    };
    if(this.state.currentPage==="lesson") {
      const response = await getOneCourse(this.state.chosenCousreId);
      this.setState({coursesData: response});
    };
  };

  async componentDidUpdate(_,prevState) {
    if(this.state.currentPage !== prevState.currentPage) {
      if(this.state.currentPage==="courses") {
        const response = await getAllCourses();
        this.setState({coursesData: response});
      };
      if(this.state.currentPage==="lesson") {
        const response = await getOneCourse(this.state.chosenCousreId);
        this.setState({coursesData: response});
      };
    };
  };

  render() {

    return(
    <>
      <Header onClick={this.changePage}/>
      {this.state.currentPage==="courses" && (<Courses courses={this.state.coursesData} />)
      }
      {this.state.currentPage==="lesson" && (<Lesson courseId={this.state.chosenCousreId}/>)}
    </>
    );
    
    
  }
};
