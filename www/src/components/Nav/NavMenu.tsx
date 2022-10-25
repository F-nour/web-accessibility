import React from 'react';
import { Accordion, Container, Nav, Navbar } from 'react-bootstrap';
import { Accessibility, goodPractices, helpNavigation, Home } from './navDatas';
import { NavSection } from './NavSelect';

import '../../styles/nav.scss';

export default function NavMenu(): JSX.Element {
	return (
		<>
			<Navbar variant='light' expand='lg' fixed='top' className='flex-column'>
				<Container>
					<Navbar.Brand aria-label='Accueil du site Web Accessibility'>
						Web Accessibility
					</Navbar.Brand>
					<Navbar.Toggle
						label='Menu princpal'
						aria-controls='basic-navbar-nav'
					/>
				</Container>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav
						as='ul'
						defaultActiveKey='/'
						className='me-auto flex-column'
					>
						<NavSection title={Home.title} path={Home.path} />
						<NavSection
							title={Accessibility.title}
							path={Accessibility.path}
						/>
						<Accordion>
							<NavSection
								title={goodPractices.title}
								path={goodPractices.path}
								disabled
							/>

							<NavSection
								title={helpNavigation.title}
								path={helpNavigation.path}
								items={helpNavigation.items}
								names={helpNavigation.names}
								disabled
							/>
						</Accordion>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
