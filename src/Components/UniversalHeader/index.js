import React from "react";

export class UniversalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGlobalNavOpen: false };
  }
  render() {
    const { isGlobalNavOpen } = this.state;
    return (
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
            onClick={() => this.setState({ isGlobalNavOpen: !isGlobalNavOpen })}
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
    );
  }
}
