import React from 'react'
import './UniversalHeader.css'

export class UniversalHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isGlobalNavOpen: false }
  }
  render() {
    const { isGlobalNavOpen } = this.state
    return (
      <div className="Universalheader">
        <div className="UniversalHeader--navlinks">
          <a href="#courses" className="UniversalHeader--link">
            Courses
          </a>
          <a href="#marketplace" className="UniversalHeader--link">
            Marketplace
          </a>
        </div>
        <div className="UniversalHeader--collapsablelist">
          <button
            className="UniversalHeader--collapsablebutton"
            onClick={() => this.setState({ isGlobalNavOpen: !isGlobalNavOpen })}
          >
            Jennifer Cahalane
          </button>
          {isGlobalNavOpen && (
            <ul className="UniversalHeader--navlist" role="menu">
              <li className="UniversalHeader--listitem">
                <a href="/settings" className="UniversalHeader--listlink">
                  Settings
                </a>
              </li>
              <li className="UniversalHeader--listitem">
                <a href="/logout" className="UniversalHeader--listlink">
                  Log out
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}
