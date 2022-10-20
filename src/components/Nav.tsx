import { Accordion, Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/nav.scss';

export default function NavMenu() {
	return (
		<>
			<Navbar expand='lg' fixed='top' className='flex-column'>
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
					<Nav activeKey={location.pathname} className='me-auto flex-column'>
						<LinkContainer to='/'>
							<Nav.Item>
								<Nav.Link>Accueil</Nav.Link>
							</Nav.Item>
						</LinkContainer>
						<LinkContainer to='/accessibility'>
							<Nav.Item>
								<Nav.Link disabled>Qu'es-ce que l'accessibilité</Nav.Link>
							</Nav.Item>
						</LinkContainer>

						<Accordion>
							<Accordion.Item eventKey='0' className='nav-accordion__bg'>
								<Accordion.Header className='nav-accordion__bg'>
									Les bonnes pratiques
								</Accordion.Header>
								<Accordion.Body>
									<Nav.Item>
										<Nav.Link disabled>HTML</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>CSS</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>JavaScript</Nav.Link>
									</Nav.Item>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='1' className='nav-accordion__bg'>
								<Accordion.Header className='nav-accordion__bg'>
									Faciliter la navigation
								</Accordion.Header>
								<Accordion.Body>
									<Nav.Item>
										<Nav.Link disabled>Les rôles et labels</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les propriétés</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>La sémentique</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les titres</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les menus</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les liens et les boutons</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les formulaires</Nav.Link>
									</Nav.Item>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='2' className='nav-accordion__bg'>
								<Accordion.Header className='nav-accordion__bg'>
									Gestion des médias
								</Accordion.Header>
								<Accordion.Body>
									<Nav.Item>
										<Nav.Link disabled>Les images</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les icônes</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link disabled>Les vidéos</Nav.Link>
									</Nav.Item>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
