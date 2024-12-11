import React from "react";

interface getBreadcrumbProps {
  path: string[];
  onClick: (segment: string) => void;
  icon: string; //URL for the icon image
}

const getBreadcrumb = ({ path }: getBreadcrumbProps) => {
  return (
    <div>
      {path.map((segment, index) => (
        <span key={index} onClick={() => onClick(segment)}>
          {segment}
          {index < path.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default getBreadcrumb;
