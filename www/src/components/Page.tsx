import React from 'react'
import {classValue} from "../hooks/utilities";
import {Heading} from "./Heading"

type Props = {
    name: string;
    section?: string;
    className?: string;
    titleContent?: React.ReactNode;
    children?: React.ReactNode;
}

/**
 *
 * @param name
 * @param children
 * @param className
 * @return JSX.Element
 */
export const Page = ({name, children, className}: Props) => {
    return (
        <section id={name} className={`${name}${classValue(className)}`}>
            {children}
        </section>
    )
}

/**
 *
 * @param name
 * @param section
 * @param children
 * @param className
 * @return JSX.Element
 */
export const PartPage = ({name, section, children, className}: Props) => {
    const field = `${name}-${section}`
    return (
        <div id={field} className={`${field}${classValue(className)}`}>
            {children}
        </div>
    )
}

/**
 *
 * @param name
 * @param section
 * @param titleContent
 * @return JSX.Element
 */
export function PageTitle({name, section = 'title', children}: Props) {
    return (
        <>
            <PartPage name={name} section={section}>
                <Heading headingLevel="h1">{children}</Heading>
            </PartPage>

        </>
    )
}

export function SectionTitle({name, section = 'title', children}: Props) {
    return (
        <>
            <PartPage name={name} section={section}>
                <Heading headingLevel="h2">
                    {children}
                </Heading>
            </PartPage>
        </>
    )
}