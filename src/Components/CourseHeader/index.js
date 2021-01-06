import React from "react";
import { navTabs } from "../../constants.js";
import { NavTab } from "./NavTab";
import "./CourseHeader.css";

export class CourseHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHash: window.location.hash || "#content",
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

  render() {
    const { activeHash } = this.state;

    return (
      <div className="CourseHeader">
        <p className="CourseHeader--title">A11y Reading Group</p>
        <div className="CourseHeader--tabs">
          {navTabs.map((tab) => (
            <NavTab tab={tab} activeHash={activeHash} key={tab.hash} />
          ))}
        </div>
      </div>
    );
  }
}
