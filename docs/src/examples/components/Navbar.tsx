export const NavbarBasic = `
<Navbar collapseOnSelect expand="sm" id="example-navbar" className="border">
  <Button
    variant="text-dark"
    id="menuButton"
    size="lg"
    className="btn-icon-only"
    data-modus-item="menu-btn"
    data-toggle="#"
  >
    <i className="modus-icon material-icons">menu</i>
  </Button>
  <Navbar.Brand className=" mr-auto ml-2" href="#">
    <img
      src={TrimbleLogo}
      width="107"
      height="25"
      className="img-fluid d-none d-sm-block"
      alt="home"
    />
    <img
      src={TrimbleIcon}
      className="d-block d-sm-none"
      height="25"
      width="25"
      alt="home"
    />
  </Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <OverlayTrigger
        key="notification"
        placement="bottom"
        overlay={<Tooltip id="notifytooltip">Notifications</Tooltip>}
      >
        <Button
          variant="text-dark"
          id="notifybtn"
          size="lg"
          className="btn-icon-only"
        >
          <i className="modus-icon material-icons">notifications</i>
        </Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="help"
        placement="bottom"
        overlay={<Tooltip id="helptooltip">Help</Tooltip>}
      >
        <Button
          variant="text-dark"
          id="helpbtn"
          size="lg"
          className="btn-icon-only"
        >
          <i className="modus-icon material-icons">help</i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        key="apps"
        placement="bottom"
        overlay={<Tooltip id="appstooltip">Apps</Tooltip>}
      >
        <Button
          variant="text-dark"
          id="appsbtn"
          size="lg"
          className="btn-icon-only"
        >
          <i className="modus-icon material-icons">apps</i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        key="account"
        placement="bottom"
        overlay={
          <Tooltip id="notifytooltip">
            <div className="text-left">
              MyTrimble
              <br />
              Stephanie Carter
              <br />
              stephanie_carter@example.com
            </div>
          </Tooltip>
        }
      >
        <Button
          variant="text-dark"
          id="acntbtn"
          size="lg"
          className="btn-icon-only"
        >
          <i className="modus-icon material-icons">account_circle</i>
        </Button>
      </OverlayTrigger>
    </Nav>
  </Navbar.Collapse>
</Navbar>
`

export const NavbarBlue = `
<Navbar collapseOnSelect expand="sm" id="example-navbar" className="border navbar-blue">
  <Button
    variant="icon-only"
    id="menuButton"
    size="lg"
    data-modus-item="menu-btn"
    data-toggle="#"
  >
    <i className="modus-icon material-icons">menu</i>
  </Button>
  <Navbar.Brand className=" mr-auto ml-2" href="#">
    <img
      src={TrimbleLogoRev}
      width="107"
      height="25"
      className="img-fluid d-none d-sm-block"
      alt="home"
    />
    <img
      src={TrimbleIconRev}
      className="d-block d-sm-none"
      height="25"
      width="25"
      alt="home"
    />
  </Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <OverlayTrigger
        key="notification"
        placement="bottom"
        overlay={<Tooltip id="notifytooltip">Notifications</Tooltip>}
      >
        <Button
          variant="icon-only"
          id="notifybtn"
          size="lg"
        >
          <i className="modus-icon material-icons">notifications</i>
        </Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="help"
        placement="bottom"
        overlay={<Tooltip id="helptooltip">Help</Tooltip>}
      >
        <Button
          variant="icon-only"
          id="helpbtn"
          size="lg"
        >
          <i className="modus-icon material-icons">help</i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        key="apps"
        placement="bottom"
        overlay={<Tooltip id="appstooltip">Apps</Tooltip>}
      >
        <Button
          variant="icon-only"
          id="appsbtn"
          size="lg"
        >
          <i className="modus-icon material-icons">apps</i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        key="account"
        placement="bottom"
        overlay={
          <Tooltip id="notifytooltip">
            <div className="text-left">
              MyTrimble
              <br />
              Stephanie Carter
              <br />
              stephanie_carter@example.com
            </div>
          </Tooltip>
        }
      >
        <Button
          variant="icon-only"
          id="acntbtn"
          size="lg"
        >
          <i className="modus-icon material-icons">account_circle</i>
        </Button>
      </OverlayTrigger>
    </Nav>
  </Navbar.Collapse>
</Navbar>
`

export const NavbarWithoutHamburger = `
<Navbar collapseOnSelect expand="sm" id="example-navbar" className="border navbar-blue">
  <Navbar.Brand className=" mr-auto ml-2" href="#">
    <img
      src={TrimbleLogoRev}
      width="107"
      height="25"
      className="img-fluid d-none d-sm-block"
      alt="home"
    />
    <img
      src={TrimbleIconRev}
      className="d-block d-sm-none"
      height="25"
      width="25"
      alt="home"
    />
  </Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <OverlayTrigger
        key="notification"
        placement="bottom"
        overlay={<Tooltip id="notifytooltip">Notifications</Tooltip>}
      >
        <Button
          variant="icon-only"
          id="notifybtn"
          size="lg"
        >
          <i className="modus-icon material-icons">notifications</i>
        </Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="help"
        placement="bottom"
        overlay={<Tooltip id="helptooltip">Help</Tooltip>}
      >
        <Button
          variant="icon-only"
          id="helpbtn"
          size="lg"
        >
          <i className="modus-icon material-icons">help</i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        key="apps"
        placement="bottom"
        overlay={<Tooltip id="appstooltip">Apps</Tooltip>}
      >
        <Button
          variant="icon-only"
          id="appsbtn"
          size="lg"
        >
          <i className="modus-icon material-icons">apps</i>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        key="account"
        placement="bottom"
        overlay={
          <Tooltip id="notifytooltip">
            <div className="text-left">
              MyTrimble
              <br />
              Stephanie Carter
              <br />
              stephanie_carter@example.com
            </div>
          </Tooltip>
        }
      >
        <Button
          variant="icon-only"
          id="acntbtn"
          size="lg"
        >
          <i className="modus-icon material-icons">account_circle</i>
        </Button>
      </OverlayTrigger>
    </Nav>
  </Navbar.Collapse>
</Navbar>
`
