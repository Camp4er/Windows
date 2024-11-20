import React from 'react'

interface BreadcrumbProps {
    path: string[]; //current path
    onNavigate: (newPath:string[]) => void; //function to handle navigation
}

const Breadcrumb = ({path, onNavigate}: BreadcrumbProps) => {
  return (
    <div className='flex items-center bg-gray-200 p-2 border-b border-gray-300 text-sm'>
      {path.map((segment, index) => (
        <React.Fragment key={index}>
            <button
            className={`hover:underline ${index === path.length - 1 ? 'text-gray-600' : 'text-blue-500'}`}
            onClick={() => onNavigate(path.slice(0, index + 1))}
            >
                {segment}
            </button>
            {index < path.length - 1 && (
            <span className="mx-1 text-gray-500">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Breadcrumb;
