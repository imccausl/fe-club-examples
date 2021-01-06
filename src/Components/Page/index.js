import React from 'react'
import './Page.css'

export const Page = ({ content, level }) => (
  <React.Fragment>
    <p className={`Page--heading--${level}`}>{content.heading}</p>
    {content.text &&
      content.text.map(text => (
        <p key={text.substring(10)} className="Page--text">
          {text}
        </p>
      ))}
    {content.children &&
      content.children.map(child => (
        <Page
          key={child.heading.substring(10)}
          content={child}
          level={level + 1}
        />
      ))}
  </React.Fragment>
)
