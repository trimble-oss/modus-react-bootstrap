import React, { useContext } from 'react'
import { Navbar, Nav, Container, Message } from '../../../src'
import logo from '../assets/img/trimble.svg'
import { Menu } from './MenuConfiguration'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import ThemeContext from './ThemeContext'

interface HeaderProps {
  activePage?: Menu
  navigationMenu?: { key: string; path?: string; title: string }[]
}
const Header: React.FunctionComponent<HeaderProps> = ({ activePage, navigationMenu }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container fluid className='bg-white'>
      <div className='fixed-top'>
        <div className='w-100 maintenance-mode-banner'>
          <Message
            className='mb-0 d-flex justify-content-center'
            variant={theme === 'dark' ? 'secondary' : 'primary'}
            icon='info'
          >
            Modus React Bootstrap is moving to maintenance-only mode. Please migrate from Modus
            React Bootstrap components to
            <a
              href='https://modus-web-components.trimble.com/'
              className='pl-1 pr-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Modus Web Components
            </a>
            for a continued support.
          </Message>
        </div>
        <Navbar expand collapseOnSelect className='px-0 px-sm-1 px-md-2 px-lg-3 navbar-blue'>
          <div className='container flex-column flex-md-row justify-content-end'>
            <Navbar.Brand href='/' className='mr-left mr-lg-auto font-weight-bold'>
              <img
                src={logo}
                width='115'
                height='26'
                className='img-fluid'
                alt='home'
                style={{ filter: 'invert(1)' }}
              ></img>
              <div>Modus React Bootstrap</div>
            </Navbar.Brand>

            <Nav role='navigation' navbarScroll id='top' className='d-none d-md-flex'>
              {navigationMenu?.map(({ key, path, title }) => {
                return (
                  <Nav.Link
                    key={key}
                    href={path}
                    active={activePage?.path?.startsWith(`/${key}`)}
                    className='justify-content-end  mx-0 mx-lg-1 mx-xl-2'
                  >
                    {title}
                  </Nav.Link>
                )
              })}
            </Nav>
            <SearchBar />
            <ThemeToggle />
          </div>
        </Navbar>
      </div>
    </Container>
  )
}

export default Header
