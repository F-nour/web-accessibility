import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Heading = ({headingLevel, children, className}: HeadingProps) => {
    const Heading = ({...props}: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement(headingLevel, props, children)
    return <Heading className={`bold ${className}`}/>
}