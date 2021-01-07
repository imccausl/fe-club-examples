import React from "react";
import "./App.css";
import { pages } from "./constants";
import { Page } from "./Components/Page";
import { Sidebar } from "./Components/Sidebar";
import { UniversalHeader } from "./Components/UniversalHeader";
import { CourseHeader } from "./Components/CourseHeader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.getActiveTitle(),
      pagesList: Object.keys(pages),
    };
  }

  getActiveTitle = () => {
    const path = window.location.pathname;
    if (path && path !== "/") {
      return path.replaceAll("/page/", "");
    }
    return Object.keys(pages)[0];
  };

  openPage = (pageTitle) => {
    this.setState({ activePage: pageTitle });
    window.history.replaceState({}, "", `/page/${pageTitle}`);
  };

  deletePage = (pageTitle) => {
    const pagesList = this.state.pagesList.filter(
      (title) => title !== pageTitle
    );
    this.setState({ pagesList });
    this.openPage(pagesList[0]);
    document.getElementsByClassName("Sidebar--button")[0].focus();
  };

  render() {
    return (
      <div className="App">
        <a href="#main" className="SkipLink">
          Skip to main content
        </a>
        <header className="Header" role="banner" aria-labelledby="course-name">
          <UniversalHeader />
          <CourseHeader />
        </header>
        <div className="Body">
          <Sidebar
            openPage={this.openPage}
            deletePage={this.deletePage}
            pagesList={this.state.pagesList}
          />
          <main className="Page" id="main" tabIndex={-1}>
            {pages[this.state.activePage].map((content) => (
              <Page
                content={content}
                level={0}
                key={content.heading.substring(10)}
              />
            ))}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
