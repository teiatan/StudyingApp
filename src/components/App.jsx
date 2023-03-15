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

  onClick = async e => {
    this.setState({currentPage: e.target.id});
    getAllCourses();
    console.log(await getAllCourses());
  };

  async componentDidMount() {
    const response = await getAllCourses();
    this.setState({coursesData: response});
  }

  render() {
    const {title} = this.state.coursesData;

    return(
    <>
      <Header onClick={this.onClick}/>
      {this.state.currentPage==="courses" && 
        (<Courses 
          title={title}

        />)
      }
      {this.state.currentPage==="lesson" && (<Lesson />)}
    </>
    );
    
    
  }
};
