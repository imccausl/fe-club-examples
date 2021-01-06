import React from "react";
import "./App.css";
import { navTabs, pages } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGlobalNavOpen: false,
      activePage: this.getActiveTitle(),
      activeHash: window.location.hash || "#content",
      pagesList: Object.keys(pages),
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.onHashChanged, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChanged);
  }

  onHashChanged = () => {
    this.setState({ activeHash: window.location.hash });
  };

  getActiveTitle = () => {
    const path = window.location.pathname;
    if (path && path !== "/") {
      return path.replaceAll("/page/", "");
    }
    return Object.keys(pages)[0];
  };

  getContent = (content, level) => (
    <React.Fragment>
      {content.heading && (
        <p className={`Content-header${level}`}>{content.heading}</p>
      )}
      {content.text &&
        content.text.map((text) => <p className="Content-text">{text}</p>)}
      {content.children &&
        content.children.map((child) => this.getContent(child, level + 1))}
    </React.Fragment>
  );

  openPage = (pageTitle) => {
    this.setState({ activePage: pageTitle });
    window.history.replaceState(
      { pageTitle },
      "pageTitle",
      `/page/${pageTitle}`
    );
  };

  deletePage = (pageTitle) => {
    const pagesList = this.state.pagesList.filter(
      (title) => title !== pageTitle
    );
    this.setState({ pagesList });
  };

  render() {
    const { isGlobalNavOpen } = this.state;
    console.log(this.state.activePage)

    return (
      <div className="App">
        <header className="App-header">
          <div className="Header-universalheader">
            <div className="UniversalHeader-links">
              <a href="#courses" className="UniversalHeader-linkitem">
                Courses
              </a>
              <a href="#marketplace" className="UniversalHeader-linkitem">
                Marketplace
              </a>
            </div>
            <div className="UniversalHeader-navlist">
              <button
                className="UniversalHeader-buttondropdown"
                onClick={() =>
                  this.setState({ isGlobalNavOpen: !isGlobalNavOpen })
                }
              >
                Jennifer Cahalane
              </button>
              {isGlobalNavOpen && (
                <ul className="UniversalHeader-list">
                  <li className="UniversalHeader-listitem">
                    <a href="/settings" className="UniversalHeader-listlink">
                      Settings
                    </a>
                  </li>
                  <li className="UniversalHeader-listitem">
                    <a href="/logout" className="UniversalHeader-listlink">
                      Log out
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="Header-info">
            <p className="Header-title">A11y Reading Group</p>
            <div className="Header-tabs">
              {navTabs.map((tab) => {
                let classes = "Header-tab";
                if (tab.hash === this.state.activeHash) {
                  classes += " Header-tab--active";
                }
                return (
                  <a href={tab.hash} className={classes}>
                    {tab.title}
                  </a>
                );
              })}
            </div>
          </div>
        </header>

        <div className="App-body">
          <div className="App-sidebar" aria-label="sidebar: page list">
            <ul className="Sidebar-list">
              {this.state.pagesList.map((pageTitle) => (
                <li className="Sidebar-listitem" key={pageTitle}>
                  <button
                    onClick={() => this.openPage(pageTitle)}
                    className="Sidebar-link"
                  >
                    {pageTitle.replaceAll("-", " ")}
                  </button>
                  <button
                    className="Sidebar-deleteitem"
                    onClick={() => this.deletePage(pageTitle)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <main className="App-content">
            {pages[this.state.activePage].map((content) =>
              this.getContent(content, 0)
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
