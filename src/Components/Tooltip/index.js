import { useState } from 'react'

import './Tooltip.css'

export const InfoIconTooltip = ({ info }) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const toggleShowTooltip = () => {
        setShowTooltip(true)
    }

    const toggleHideTooltip = () => {
        setShowTooltip(false)
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
            {showTooltip && (
                <div className="Tooltip--content">
                    {info}
                </div>
            )}
        </div>
    )
}

export const Tooltip = WrappedComponent => ({content}) => {

}
