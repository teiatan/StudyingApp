import { Component } from "react";
import { Header } from "./header/Header";
import { Courses } from "./courses/Courses";
import { Lesson } from "./lesson/Lesson";
import { getAllCourses } from "service/api";

export class App extends Component {
  state = {
    currentPage: "courses",
    coursesData: [],
  };

  changePage = async e => {
    this.setState({currentPage: e.target.id});
  };

  async componentDidMount() {
    if(this.state.currentPage==="courses") {
      const response = await getAllCourses();
      this.setState({coursesData: response});
    };
  };

  render() {

    return(
    <>
      <Header onClick={this.changePage}/>
      {this.state.currentPage==="courses" && (<Courses courses={this.state.coursesData} />)
      }
      {this.state.currentPage==="lesson" && (<Lesson />)}
    </>
    );
    
    
  }
};
