export const ListsBasic = `
<div>
  <h6>List Items</h6>
  <ListGroup style={{ maxWidth: "400px" }}>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</div>
`

export const ListsItems = `
<div>
  <h6>List Items</h6>
  <ListGroup style={{ maxWidth: "400px" }}>
    <ListGroup.Item active>List Item(active)</ListGroup.Item>
    <ListGroup.Item>
      <Form.Switch id="custom-switch" checked />
      <span>Left Switch</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Switch</span>
      <Form.Switch id="custom-switch" checked />
    </ListGroup.Item>
    <ListGroup.Item>
      <FormCheck checked id="custom-checkbx" custom readOnly />
      <span>Left Checkbox</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check checked type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check disabled type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item disabled>List Item (disabled)</ListGroup.Item>
    <ListGroup.Item className="list-item-left-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Left Icon</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Icon</span>
      <i className="modus-icon material-icons">settings</i>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-leftright-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Both Icons</span>
      <i className="icon modus-icons">check</i>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      List with Text Badge
      <Badge pill variant="text-primary">
        14
      </Badge>
    </ListGroup.Item>
  </ListGroup>
</div>
`

export const ListsBorderless = `
<div>
  <h6>List Items</h6>
  <ListGroup className="list-group-borderless" style={{ maxWidth: "400px" }}>
    <ListGroup.Item active>List Item(active)</ListGroup.Item>
    <ListGroup.Item>
      <Form.Switch id="custom-switch" checked />
      <span>Left Switch</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Switch</span>
      <Form.Switch id="custom-switch" checked />
    </ListGroup.Item>
    <ListGroup.Item>
      <FormCheck checked id="custom-checkbx" custom readOnly />
      <span>Left Checkbox</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check checked type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check disabled type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item disabled>List Item (disabled)</ListGroup.Item>
    <ListGroup.Item className="list-item-left-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Left Icon</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Icon</span>
      <i className="modus-icon material-icons">settings</i>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-leftright-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Both Icons</span>
      <i className="icon modus-icons">check</i>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      List with Text Badge
      <Badge pill variant="text-primary">
        14
      </Badge>
    </ListGroup.Item>
  </ListGroup>
</div>
`

export const ListsCondensed = `
<div>
  <h6>List Items</h6>
  <ListGroup className="list-group-condensed" style={{ maxWidth: "400px" }}>
    <ListGroup.Item active>List Item(active)</ListGroup.Item>
    <ListGroup.Item>
      <Form.Switch id="custom-switch" checked />
      <span>Left Switch</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Switch</span>
      <Form.Switch id="custom-switch" checked />
    </ListGroup.Item>
    <ListGroup.Item>
      <FormCheck checked id="custom-checkbx" custom readOnly />
      <span>Left Checkbox</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check checked type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check disabled type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item disabled>List Item (disabled)</ListGroup.Item>
    <ListGroup.Item className="list-item-left-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Left Icon</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Icon</span>
      <i className="modus-icon material-icons">settings</i>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-leftright-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Both Icons</span>
      <i className="icon modus-icons">check</i>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      List with Text Badge
      <Badge pill variant="text-primary">
        14
      </Badge>
    </ListGroup.Item>
  </ListGroup>
</div>
`
export const ListsLarge = `
<div>
  <h6>List Items</h6>
  <ListGroup className="list-group list-group-lg" style={{ maxWidth: "400px" }}>
    <ListGroup.Item active>List Item(active)</ListGroup.Item>
    <ListGroup.Item>
      <Form.Switch id="custom-switch" checked />
      <span>Left Switch</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Switch</span>
      <Form.Switch id="custom-switch" checked />
    </ListGroup.Item>
    <ListGroup.Item>
      <FormCheck checked id="custom-checkbx" custom readOnly />
      <span>Left Checkbox</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check checked type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <Form.Check disabled type="radio" id="custom-rb" custom />
      <span>Left Radio Button</span>
    </ListGroup.Item>
    <ListGroup.Item disabled>List Item (disabled)</ListGroup.Item>
    <ListGroup.Item className="list-item-left-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Left Icon</span>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-right-control">
      <span>Right Icon</span>
      <i className="modus-icon material-icons">settings</i>
    </ListGroup.Item>
    <ListGroup.Item className="list-item-leftright-control">
      <i className="modus-icon material-icons">settings</i>
      <span>Both Icons</span>
      <i className="icon modus-icons">check</i>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      List with Text Badge
      <Badge pill variant="text-primary">
        14
      </Badge>
    </ListGroup.Item>
  </ListGroup>
</div>
`
