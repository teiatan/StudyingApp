import { Component } from "react";
import { Header } from "./header/Header";
import { Courses } from "./courses/Courses";
import { Lessons } from "./lessons/Lessons";
import { PictureInPicture } from "./pictureInPicture/PictureInPicture";
import { getAllCourses, getOneCourse } from "service/api";

export class App extends Component {
  state = {
    currentPage: "courses",
    coursesData: [],
    oneCourseData: [],
    chosenCousreId: "",
    loader: true,
    pictureInPictureData: {},
  };

  async componentDidMount() {
    const currentPage = localStorage.getItem('currentPage');
    if(currentPage) {
      this.setState({
        currentPage: currentPage,
      })
    };

    const chosenCousreId = localStorage.getItem('chosenCousreId');
    if(chosenCousreId) {
      this.setState({
        chosenCousreId: chosenCousreId,
      })
    };

    if(this.state.currentPage==="courses") {
      const response = await getAllCourses();
      this.setState({coursesData: response, loader: false});
    };

    if(this.state.currentPage==="lessons" && this.state.chosenCousreId !== "") {
      const response = await getOneCourse(this.state.chosenCousreId);
      this.setState({oneCourseData: response});
    };
  };

  async componentDidUpdate(_,prevState) {
    if(this.state.currentPage !== prevState.currentPage) {

      localStorage.setItem('currentPage', this.state.currentPage);

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

    if(this.state.chosenCousreId !== prevState.chosenCousreId) {
      localStorage.setItem('chosenCousreId', this.state.chosenCousreId);
    };
  };

  changePage = e => {
    this.setState({currentPage: e.target.id, loader:true});
  };

  learnMoreAboutCourse = (id) => {
    this.setState({chosenCousreId: id, currentPage: "lessons"})
  };

  getPictureInPictureData = (link) => {
    console.log(link);
    this.setState({pictureInPictureData: link});
  };

  render() {

    return(
    <>
      <Header onClick={this.changePage}/>
      <h1 className="container isHidden">Education for everyone!!!</h1>
      {this.state.currentPage==="courses" && (<Courses courses={this.state.coursesData} onLearnMoreClick={this.learnMoreAboutCourse} loader={this.state.loader}/>)
      }
      {this.state.currentPage==="lessons" && (<Lessons courseData={this.state.oneCourseData} courseId={this.state.chosenCousreId} changePageFunction={this.changePage} pictureInPictureData={this.getPictureInPictureData}/>)}
      <PictureInPicture data={this.state.pictureInPictureData}/>
    </>
    );
    
    
  }
};
