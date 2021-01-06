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
          <div className="Header-info">
            <p className="Header-title">A11y Reading Group</p>
            <div className="Header-tabs">
              <a href="#content" className="Header-tab">Content</a>
              <a href="#gradebook" className="Header-tab">Gradebook</a>
              <a href="#students" className="Header-tab">Students</a>
            </div>
          </div>
        </header>

        <div className="App-body">
          <div className="App-sidebar" aria-label="sidebar: page list">
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
          </div>

          <main className="App-content">
            <p className="Content-header">Nullam ac Tortor Vitae</p>
            <p className="Content-subheader">Nulla Malesuada</p>
              <p className="Content-sub-subheader">Arcu</p>
              <p className="Content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper. Turpis massa sed elementum tempus egestas sed sed. Nunc mattis enim ut tellus elementum sagittis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Amet volutpat consequat mauris nunc congue nisi. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Interdum posuere lorem ipsum dolor. Nisi vitae suscipit tellus mauris a diam. Vestibulum rhoncus est pellentesque elit. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Faucibus nisl tincidunt eget nullam non nisi est sit. Purus ut faucibus pulvinar elementum integer enim neque volutpat.</p>
              <p className="Content-text">Sed libero enim sed faucibus. Aenean pharetra magna ac placerat vestibulum. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Est placerat in egestas erat imperdiet sed euismod nisi porta. Et ligula ullamcorper malesuada proin libero nunc. Suspendisse ultrices gravida dictum fusce ut. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Turpis egestas pretium aenean pharetra magna ac. Quis varius quam quisque id diam vel. Id aliquet risus feugiat in ante metus dictum.</p>
              <p className="Content-sub-subheader">Habitant Morbi Tristique</p>
              <p className="Content-text">Faucibus vitae aliquet nec ullamcorper sit. Arcu dui vivamus arcu felis bibendum ut tristique. Velit ut tortor pretium viverra. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl rhoncus mattis rhoncus urna neque viverra. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Mauris pharetra et ultrices neque. Cursus mattis molestie a iaculis at erat pellentesque. Scelerisque fermentum dui faucibus in ornare. Nunc non blandit massa enim nec dui nunc. Porta nibh venenatis cras sed felis. Velit dignissim sodales ut eu sem integer vitae justo eget. Sed odio morbi quis commodo odio aenean sed. Id volutpat lacus laoreet non. Mollis nunc sed id semper risus in hendrerit gravida.</p>
            <p className="Content-subheader">Odio Facilisis</p>
            <p className="Content-text">Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam. Luctus accumsan tortor posuere ac ut consequat semper. Congue eu consequat ac felis donec. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Nullam vehicula ipsum a arcu cursus. Congue mauris rhoncus aenean vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Lectus sit amet est placerat in egestas erat imperdiet sed. In fermentum posuere urna nec tincidunt praesent. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Viverra adipiscing at in tellus. Justo laoreet sit amet cursus. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Vestibulum mattis ullamcorper velit sed. Id semper risus in hendrerit gravida rutrum quisque non. Sit amet nisl suscipit adipiscing. Sed elementum tempus egestas sed sed risus pretium quam.</p>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
