import React from 'react'
import './UniversalHeader.css'

export class UniversalHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isGlobalNavOpen: false, isSupportNavOpen: false }
  }
  render() {
    const { isGlobalNavOpen, isSupportNavOpen } = this.state
    return (
      <div className="Universalheader">
        <nav className="UniversalHeader--navlinks">
          <a href="#courses" className="UniversalHeader--link">
            Courses
          </a>
          <a href="#marketplace" className="UniversalHeader--link">
            Marketplace
          </a>
        </nav>
        <div className="UniversalHeader--align-right">
          <nav className="UniversalHeader--collapsablelist">
            <button
              className="UniversalHeader--collapsablebutton"
              onClick={() =>
                this.setState({ isSupportNavOpen: !isSupportNavOpen })
              }
            >
              Support
            </button>
            {isSupportNavOpen && (
              <ul className="UniversalHeader--navlist" role="menu">
                <li className="UniversalHeader--listitem">
                  <a href="#chat" className="UniversalHeader--listlink">
                    Contact Us
                  </a>
                </li>
                <li className="UniversalHeader--listitem">
                  <a href="#faq" className="UniversalHeader--listlink">
                    FAQs
                  </a>
                </li>
              </ul>
            )}
          </nav>
          <nav className="UniversalHeader--collapsablelist">
            <button
              className="UniversalHeader--collapsablebutton"
              onClick={() =>
                this.setState({ isGlobalNavOpen: !isGlobalNavOpen })
              }
              aria-expanded={isGlobalNavOpen ? 'true' : ''}
            >
              Jane Doe
            </button>
            {isGlobalNavOpen && (
              <ul className="UniversalHeader--navlist" role="menu">
                <li className="UniversalHeader--listitem">
                  <a href="#settings" className="UniversalHeader--listlink">
                    Settings
                  </a>
                </li>
                <li className="UniversalHeader--listitem">
                  <a href="#logout" className="UniversalHeader--listlink">
                    Log out
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    )
  }
}
