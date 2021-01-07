import React from "react";
import "./UniversalHeader.css";

export class UniversalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGlobalNavOpen: false, isSupportNavOpen: false };
  }
  render() {
    const { isGlobalNavOpen, isSupportNavOpen } = this.state;
    return (
      <div className="Universalheader">
        <nav className="UniversalHeader--navlinks" aria-label="app links">
          <a href="#courses" className="UniversalHeader--link">
            Courses
          </a>
          <a href="#marketplace" className="UniversalHeader--link">
            Marketplace
          </a>
        </nav>
        <div className="UniversalHeader--align-right">
          <nav
            className="UniversalHeader--collapsablelist"
            aria-label="Support"
          >
            <button
              aria-expanded={isSupportNavOpen}
              className="UniversalHeader--collapsablebutton"
              onClick={() =>
                this.setState({ isSupportNavOpen: !isSupportNavOpen })
              }
            >
              Support
            </button>
            {isSupportNavOpen && (
              <ul className="UniversalHeader--navlist">
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
          <nav
            className="UniversalHeader--collapsablelist"
            aria-labelledby="user-nav"
          >
            <button
                id="user-nav"
              className="UniversalHeader--collapsablebutton"
              onClick={() =>
                this.setState({ isGlobalNavOpen: !isGlobalNavOpen })
              }
              aria-expanded={isGlobalNavOpen}
            >
                <div className="visually-hidden">
                    user settings for
                </div>
              Jane Doe
            </button>
            {isGlobalNavOpen && (
              <ul className="UniversalHeader--navlist">
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
    );
  }
}
