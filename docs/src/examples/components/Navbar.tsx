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
      src="https://modus-bootstrap.trimble.com/img/trimble-logo.svg"
      width="107"
      height="25"
      className="img-fluid d-none d-sm-block"
      alt="home"
    />
    <img
      src="https://modus-bootstrap.trimble.com/img/trimble-icon.svg"
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
      src="https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg"
      width="107"
      height="25"
      className="img-fluid d-none d-sm-block"
      alt="home"
    />
    <img
      src="https://modus-bootstrap.trimble.com/img/trimble-icon-rev.svg"
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

export const NavbarWithoutHamburger = `
<Navbar collapseOnSelect expand="sm" id="example-navbar" className="border navbar-blue">
  <Navbar.Brand className=" mr-auto ml-2" href="#">
    <img
      src="https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg"
      width="107"
      height="25"
      className="img-fluid d-none d-sm-block"
      alt="home"
    />
    <img
      src="https://modus-bootstrap.trimble.com/img/trimble-icon-rev.svg"
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
