import { Component } from "react";
import { Header } from "./header/Header";
import { Courses } from "./courses/Courses";
import { Lesson } from "./lesson/Lesson";
import { getAllCourses } from "service/api";

export class App extends Component {
  state = {
    currentPage: "courses",
  };

  onClick = async e => {
    this.setState({currentPage: e.target.id});
    getAllCourses();
    console.log(await getAllCourses());
  };

  render() {

    return(
    <>
      <Header onClick={this.onClick}/>
      {this.state.currentPage==="courses" && (<Courses />)}
      {this.state.currentPage==="lesson" && (<Lesson />)}
    </>
    );
    
    
  }
};
