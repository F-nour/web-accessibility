import React from "react";
import { Nav, Accordion } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { To } from "react-router-dom";

interface Props {
	title: string;
	path?: To | string;
	items?: string[];
	names?: string[];
	disabled?: boolean;
}

const LinkMenu = ({ title, path, disabled }: Props): JSX.Element => {
	if (disabled) {
		return (
			<>
				<Nav.Item as='li'>
					<Nav.Link disabled>{`${title}`}</Nav.Link>
				</Nav.Item>
			</>
		);
	} else {
		return (
			<>
				<Nav.Item as='li'>
					<LinkContainer to={`${path}/`}>
						<Nav.Link eventKey={title}>{`${title}`}</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</>
		);
	}
};

export const NavSection = ({
	title,
	path,
	items,
	names,
	disabled,
}: Props): JSX.Element => {
	if (items && names) {
		return (
			<>
				<Accordion.Item as='li' eventKey={title} className='nav-accordion__bg'>
					<Accordion.Header className='nav-accordion__bg'>
						{title}
					</Accordion.Header>
					<Accordion.Body as='ul'>
						{items.map((item, number) => (
							<LinkMenu
								title={`${names[number]}`}
								path={`${path}/${item}`}
								disabled={disabled}
								key={`${item}-${number}`}
							/>
						))}
					</Accordion.Body>
				</Accordion.Item>
			</>
		);
	} else {
		return (
			<>
				<LinkMenu title={title} path={path} disabled={disabled} />
			</>
		);
	}
};