import React, { useState } from "react";

import infoIcon from "./info_icon.svg";
import "./Tooltip.css";

export const InfoIconTooltip = ({ info, width = "150px", additionalLabelText }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleShowTooltip = () => {
    setIsVisible(true);
  };

  const toggleHideTooltip = () => {
    setIsVisible(false);
  };

  const ariaLabel = additionalLabelText ? `More info: ${additionalLabelText}` : 'More info'
  const display = isVisible ? 'block' : 'none'

  return (
    <div className="Tooltip--container">
      <div
        aria-describedby="tooltip-content"
        className="Tooltip--button"
        onFocus={toggleShowTooltip}
        onBlur={toggleHideTooltip}
        onMouseOver={toggleShowTooltip}
        onMouseLeave={toggleHideTooltip}
        tabindex="0"
      >
        <img className="Tooltip--icon" src={infoIcon} aria-label={ariaLabel} alt="" />
      </div>
        <div role="tooltip" id="tooltip-content" className="TooltipIcon--content" style={{ width, display }}>
          {info}
        </div>
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
