import React, { useState } from 'react'

import './Tooltip.css'

export const InfoIconTooltip = ({ info }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleShowTooltip = () => {
    setIsVisible(true)
  }

  const toggleHideTooltip = () => {
    setIsVisible(false)
  }

  return (
    <div className="Tooltip--container">
      <div
        className="Tooltip--button"
        role="button"
        onMouseOver={toggleShowTooltip}
        onMouseLeave={toggleHideTooltip}
      >
        ℹ️
      </div>
      {isVisible && <div className="TooltipIcon--content">{info}</div>}
    </div>
  )
}

export const withTooltip = (WrappedButtonComponent) =>
  class extends React.Component {
    state = {
      isVisible: false,
    }

    handleShowTooltip = () => {
      this.setState({
        isVisible: true,
      })
    }

    handleHideTooltip = () => {
      this.setState({
        isVisible: false,
      })
    }

    render() {
      const { tooltipContent, ...restProps } = this.props
      console.log(restProps.children)
      return (
        <div className="Tooltip--container">
          <WrappedButtonComponent
            {...restProps}
            onMouseOver={this.handleShowTooltip}
            onMouseLeave={this.handleHideTooltip}
          />
          {this.state.isVisible && (
            <div className="Tooltip--content">{tooltipContent}</div>
          )}
        </div>
      )
    }
  }

const Button = (props) => <button {...props} />

export const ButtonWithTooltip = withTooltip(Button)
