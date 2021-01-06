import React from "react";

export const Page = ({ content, level }) => (
  <React.Fragment>
    <p className={`Content-header${level}`}>{content.heading}</p>
    {content.text &&
      content.text.map((text) => (
        <p key={text.substring(10)} className="Content-text">
          {text}
        </p>
      ))}
    {content.children &&
      content.children.map((child) => (
        <Page
          key={child.heading.substring(10)}
          content={child}
          level={level + 1}
        />
      ))}
  </React.Fragment>
);
