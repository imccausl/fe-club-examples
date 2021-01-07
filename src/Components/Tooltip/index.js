import React, { useState } from "react";

import infoIcon from "./info_icon.svg";
import "./Tooltip.css";

export const InfoIconTooltip = ({ info, width = "150px" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleShowTooltip = () => {
    setIsVisible(true);
  };

  const toggleHideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div className="Tooltip--container">
      <button
        className="Tooltip--button"
        onFocus={toggleShowTooltip}
        onBlur={toggleHideTooltip}
        onMouseOver={toggleShowTooltip}
        onMouseLeave={toggleHideTooltip}
      >
        <img className="Tooltip--icon" src={infoIcon} alt="more info" />
      </button>
      {isVisible && (
        <div className="TooltipIcon--content" style={{ width }}>
          {info}
        </div>
      )}
    </div>
  );
};

export const withTooltip = (WrappedButtonComponent) =>
  class extends React.Component {
    state = {
      isVisible: false,
    };

    handleShowTooltip = () => {
      this.setState({
        isVisible: true,
      });
    };

    handleHideTooltip = () => {
      this.setState({
        isVisible: false,
      });
    };

    render() {
      const {
        tooltipContent,
        width = "150px",
        wrapperClassName,
        ...restProps
      } = this.props;
      return (
        <div className={`Tooltip--container ${wrapperClassName}`}>
          <WrappedButtonComponent
            {...restProps}
            onMouseOver={this.handleShowTooltip}
            onMouseLeave={this.handleHideTooltip}
          />
          {this.state.isVisible && (
            <div className="Tooltip--content" style={{ width }}>
              {tooltipContent}
            </div>
          )}
        </div>
      );
    }
  };

const Button = (props) => <button {...props} />;

export const ButtonWithTooltip = withTooltip(Button);
