import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { changeLanguage } from '../actions/articleActions';
import {LANGUAGES} from '../utils/metadata';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Header/Navbar component for the app
const Header = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  // Get language from centeral redux state
  const {language} = useSelector((state) => state.language);

  // Helper function to change the language from dropdown
  const handleLanguageChange = (eventKey, event) => {
    dispatch(changeLanguage(eventKey));
  }

  return (
      <header>
        <Navbar className="navbar" bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
                <Navbar.Brand className='navbar-brand' data-testid="nav-brand">
                    <Link href="/">
                        Newz
                    </Link>
                </Navbar.Brand>
                
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                  <SearchBox  />
                  <Nav className='ml-auto'>
                    <Nav.Link className="mr-3" onClick={() => router.push('/news')}>
                        Live News
                    </Nav.Link>
                    <Nav.Link className="mr-3" onClick={() => router.push('/news?&categories=sports')}>
                        Sports
                    </Nav.Link>
                    <Nav.Link className="mr-3" onClick={() => router.push('/news?&categories=health')}>
                        Health
                    </Nav.Link>
                    <NavDropdown title={language} id="collasible-nav-dropdown" onSelect={handleLanguageChange}>
                        {
                        LANGUAGES.map(language => <NavDropdown.Item key={language.key} eventKey={language.key}>{language.value}</NavDropdown.Item> )
                        }
                    </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header;
