import React from 'react'
import { InfoIconTooltip } from '../Tooltip'
import './Page.css'

export const Page = ({ content, level }) => (
  <React.Fragment>
    <div className="Page--heading-wrapper">
      <p className={`Page--heading--${level}`}>{content.heading}</p>
      {content.tooltip && (
        <InfoIconTooltip
          info={<TooltipInfo {...content.tooltip} />}
          width="240px"
        />
      )}
    </div>

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

const TooltipInfo = ({ author, published, ebookLink }) => (
  <React.Fragment>
    <p>
      <strong>Author:</strong> {author}
    </p>
    <p>
      <strong>Published:</strong> {published}
    </p>
    <a href={ebookLink}>Project Gutenberg eBook</a>
  </React.Fragment>
)
