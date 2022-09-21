export const DropdownsBasic = `
<div className="d-flex">
  <Dropdown>
    <Dropdown.Toggle variant="primary" id="dropdown-basic">
      Dropdown button 1
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <DropdownButton
    variant="primary"
    id="dropdown-basic-button"
    title="Dropdown button 2"
    className="ml-3"
  >
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>

  <DropdownButton
    variant="primary"
    id="dropdown-basic-button"
    title="Anchor tag"
    className="ml-3"
    href="#"
  >
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
</div>
`

export const DropdownsColorVariants = `
<div>
  <div className="d-flex">
    <DropdownButton
      variant="primary"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton
      variant="secondary"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton
      variant="dark"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  </div>
  <div className="d-flex mt-3">
    <DropdownButton
      variant="outline-primary"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton
      variant="outline-secondary"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton
      variant="outline-dark"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  </div>
  <div className="d-flex">
    <DropdownButton
      variant="text-primary"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton
      variant="text-secondary"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton
      variant="text-dark"
      id="dropdown-basic-button"
      title="Button"
      className="ml-3"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  </div>
</div>
`

export const DropdownsSplitButton = `
<Dropdown as={ButtonGroup}>
  <Button variant="primary">Split button</Button>
  <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
`

export const DropdownsIconButton = `
<Dropdown>
  <Dropdown.Toggle
    variant="text-dark"
    id="dropdown-basic"
    size="lg"
    bsPrefix
    className="btn-icon-only"
  >
    <i className="modus-icon material-icons">settings</i>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
`

export const DropdownsDirections = `
<div className="d-flex">
  <DropdownButton
    variant="primary"
    id="dropdown-basic-button"
    title="Down"
    className="mr-3"
    drop="down"
  >
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
  <DropdownButton
    variant="primary"
    id="dropdown-basic-button"
    title="Up"
    drop="up"
  >
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
</div>
`

export const DropdownsMenuAlignment = `
<DropdownButton
  menuAlign="right"
  title="Dropdown right"
  id="dropdown-menu-align-right"
>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton>
`

export const DropdownsMenus = `
<DropdownButton
  id="dropdown-item-button"
  variant="primary"
  title="Dropdown button"
>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`

export const DropdownsSizes = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show className="dropdown-menu-sm">
    <Dropdown.Item eventKey="1">Regular link</Dropdown.Item>
    <Dropdown.Item eventKey="2" active>
      Active link
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="4">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="5">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="6">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="7">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="8">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="9">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="10">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="11">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="12">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="13">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="14">Another link</Dropdown.Item>
  </Dropdown.Menu>

  <Dropdown.Menu show className="dropdown-menu-md">
    <Dropdown.Item eventKey="1">Regular link</Dropdown.Item>
    <Dropdown.Item eventKey="2" active>
      Active link
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="4">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="5">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="6">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="7">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="8">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="9">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="10">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="11">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="12">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="13">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="14">Another link</Dropdown.Item>
  </Dropdown.Menu>

  <Dropdown.Menu show className="dropdown-menu-lg">
    <Dropdown.Item eventKey="1">Regular link</Dropdown.Item>
    <Dropdown.Item eventKey="2" active>
      Active link
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="4">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="5">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="6">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="7">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="8">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="9">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="10">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="11">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="12">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="13">Another link</Dropdown.Item>
    <Dropdown.Item eventKey="14">Another link</Dropdown.Item>
  </Dropdown.Menu>
</div>
`

export const DropdownsActive = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show className="dropdown-menu-sm">
    <Dropdown.Item eventKey="1">Regular link</Dropdown.Item>
    <Dropdown.Item eventKey="2" active>
      Active link
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">Another link</Dropdown.Item>
  </Dropdown.Menu>
</div>
`

export const DropdownsDisabled = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show className="dropdown-menu-sm">
    <Dropdown.Item eventKey="1">Regular link</Dropdown.Item>
    <Dropdown.Item eventKey="2" disabled>
      Disabled link
    </Dropdown.Item>
    <Dropdown.Item eventKey="3">Another link</Dropdown.Item>
  </Dropdown.Menu>
</div>
`

export const DropdownsHeaders = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show className="dropdown-menu-sm">
    <Dropdown.Header>Dropdown header</Dropdown.Header>
    <Dropdown.Item eventKey="2">Active link</Dropdown.Item>
    <Dropdown.Item eventKey="3">Another link</Dropdown.Item>
  </Dropdown.Menu>
</div>
`

export const DropdownsDividers = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show>
    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
  </Dropdown.Menu>
</div>
`

export const DropdownsText = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show className="p-4 text-muted" style={{ maxWidth: "200px" }}>
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p className="mb-0">And this is more example text.</p>
  </Dropdown.Menu>
</div>
`

export const DropdownsForms = `
<div className="static-dropdown-menu">
  <Dropdown.Menu show>
    <Form className="px-4 py-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="2">New around here? Sign up</Dropdown.Item>
    <Dropdown.Item eventKey="3">Forgot password?</Dropdown.Item>
  </Dropdown.Menu>
</div>
`
