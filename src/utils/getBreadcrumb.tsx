import React from 'react'

interface getBreadcrumbProps {
    path: string[];
    icon: string; //URL for the icon image
}

const getBreadcrumb = ({path} : getBreadcrumbProps) => {
  return (
    <div>
      {path.map((segment, index) => (
        <span key={index}>{segment}</span>
      ))}
    </div>
  )
}

export default getBreadcrumb;
