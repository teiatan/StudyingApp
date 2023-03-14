import { Component } from "react";
import { Header } from "./header/Header";
import { Courses } from "./courses/Courses";
import { Lesson } from "./lesson/Lesson";

export class App extends Component {
  state = {
    currentPage: "courses",
  };



  render() {

    return(
      <>
    <Header />
    {this.state.currentPage==="courses" && (<Courses />)}
    {this.state.currentPage==="lesson" && (<Lesson />)}
    </>
    );
    
    
  }
};
