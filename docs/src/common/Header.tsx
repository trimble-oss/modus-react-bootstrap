import React from 'react'
import { Navbar, Nav, Container } from '../../../src'
import logo from '../assets/img/trimble.svg'
import { Menu } from './MenuConfiguration'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  activePage?: Menu
  navigationMenu?: { key: string; path?: string; title: string }[]
}
const Header: React.FunctionComponent<HeaderProps> = ({ activePage, navigationMenu }) => {
  return (
    <Container fluid className='bg-white'>
      <Navbar
        expand
        collapseOnSelect
        className='fixed-top px-0 px-sm-1 px-md-2 px-lg-3 navbar-blue'
      >
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
    </Container>
  )
}

export default Header
