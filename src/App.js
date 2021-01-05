import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGlobalNavOpen: false,
    }
  }
  render() {
    const {isGlobalNavOpen} = this.state

    return (
      <div className="App">
        <header className="App-header">
        <div className="Header-universalheader">
            <div className="UniversalHeader-links">
              <a href="#courses" className="UniversalHeader-linkitem">Courses</a>
              <a href="#marketplace" className="UniversalHeader-linkitem">Marketplace</a>
            </div>
            <div className="UniversalHeader-navlist">
              <button className="UniversalHeader-buttondropdown" onClick={() => this.setState({isGlobalNavOpen: !isGlobalNavOpen})}>Jennifer Cahalane</button>
              {isGlobalNavOpen && (
                <ul className="UniversalHeader-list">
                  <li className="UniversalHeader-listitem">
                    <a href="/settings" className="UniversalHeader-listlink">Settings</a>
                  </li>
                  <li className="UniversalHeader-listitem">
                    <a href="/logout" className="UniversalHeader-listlink">Log out</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <p className="Header-title">A11y Reading Group</p>
        </header>

        <div className="App-body">
          <nav className="App-sidebar" aria-label="sidebar: page list">
            <ul className="Sidebar-list">
              <li className="Sidebar-listitem">
                <a href="/page/1" className="Sidebar-link">page 1</a>
              </li>
              <li className="Sidebar-listitem">
                <a href="/page/2" className="Sidebar-link">page 2</a>
              </li>
              <li className="Sidebar-listitem">
                <a href="/page/3" className="Sidebar-link">page 3</a>
              </li>
              <li className="Sidebar-listitem">
                <a href="/page/4" className="Sidebar-link">page 4</a>
              </li>
            </ul>
          </nav>

          <main className="App-content">
            <h2 className="Content-header">Landmarks & Headings</h2>
            <h3 className="Content-subheader">Landmarks</h3>
              <h4 className="Content-sub-subheader">Main</h4>
              <p className="Content-text">Contains the primary content of page</p>
              <h4 className="Content-sub-subheader">Complementary</h4>
              <p className="Content-text">Contains secondary information that is related to the of primary content but is understandable on its own</p>
            <h3 className="Content-subheader">Headings</h3>
            <p className="Content-text">Sighted users typically rely on areas with larger or bolded text to call out different content areas on a page. The size and visual relationship between these areas helps us to gain and understanding of the hierarchy of information presented on the page. Screen reader users rely on html headings to define this hierarchy in a way that they can understand and navigate easily.</p>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
