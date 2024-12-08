import React from 'react'

interface getBreadcrumbProps {
    path: string[];
    icon: string; //URL for the icon image
}

const getBreadcrumb = ({path, icon} : getBreadcrumbProps) => {
  return (
    <div className='breadcrumb'>
      <img src={icon} alt="folder icon" className='breadcrumb-icon' />
      {path.join(' > ')}
    </div>
  )
}

export default getBreadcrumb;
