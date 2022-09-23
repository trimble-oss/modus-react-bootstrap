export const BreadcrumbsBasic = `
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>`

export const BreadcrumbsWithIcons = `
<Breadcrumb>
  <Breadcrumb.Item href="#">
    <i className="modus-icons">dashboard</i>Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    <i className="material-icons">local_library</i>Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>
    <i className="modus-icons">clipboard</i>Data
  </Breadcrumb.Item>
</Breadcrumb>`

export const BreadcrumbsAccessibleOptions = `
<Breadcrumb className="breadcrumb-underline">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>`

export const BreadcrumbsBehaviours = `
<Breadcrumb className="breadcrumb-underline">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item>
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        ...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>`
