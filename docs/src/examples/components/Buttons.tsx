export const ButtonsSolid = `
<div>
  <Button variant="primary" className="mr-2">
    Primary
  </Button>
  <Button variant="secondary" className="mr-2">
    Secondary
  </Button>
  <Button variant="tertiary">Tertiary</Button>
</div>`

export const ButtonsOutline = `
<div>
  <Button variant="outline-primary" className="mr-2">
    Primary
  </Button>
  <Button variant="outline-dark">Dark</Button>
</div>`

export const ButtonsText = `<Button variant="text-primary">Primary</Button>`

export const ButtonsTextAndIcons = `
<Button variant="primary">
  <i className="modus-icon material-icons left-icon">settings</i>Button
</Button>`

export const ButtonsIconsOnly = `
<div>
  <Button variant="icon-only" className="btn-text-dark">
    <i className="modus-icon material-icons">settings</i>
  </Button>
  <Button variant="icon-only" className="btn-text-secondary">
    <i className="modus-icon material-icons">settings</i>
  </Button>
</div>`

export const ButtonsSmall = `
<div>
  <Button variant="primary" size="sm" className="mr-2">
    Button
  </Button>
  <Button variant="secondary" size="sm" className="mr-2">
    Button
  </Button>
  <Button variant="tertiary" size="sm" className="mr-2">
    Button
  </Button>
  <Button variant="outline-primary" size="sm" className="mr-2">
    Button
  </Button>
  <Button variant="outline-secondary" size="sm" className="mr-2">
    Button
  </Button>
  <Button variant="text-primary" size="sm" className="mr-2">
    Button
  </Button>
  <Button variant="primary" size="sm">
    <i className="modus-icon material-icons left-icon">settings</i>Button
  </Button>
  <Button variant="icon-only" size="sm" className="btn-text-dark">
    <i className="modus-icon material-icons">settings</i>
  </Button>
  <Button variant="icon-only" size="sm" className="btn-text-secondary">
    <i className="modus-icon material-icons">settings</i>
  </Button>
</div>`

export const ButtonsLarge = `

<div className="bd-example">
  <Button variant="primary" size="lg" className="mr-2">
    Button
  </Button>
  <Button variant="secondary" size="lg" className="mr-2">
    Button
  </Button>
  <Button variant="tertiary" size="lg" className="mr-2">
    Button
  </Button>
  <Button variant="outline-primary" size="lg" className="mr-2">
    Button
  </Button>
  <Button variant="outline-secondary" size="lg" className="mr-2">
    Button
  </Button>
  <Button variant="text-primary" size="lg" className="mr-2">
    Button
  </Button>
  <Button variant="primary" size="lg">
    <i className="modus-icon material-icons left-icon">settings</i>Button
  </Button>
  <Button variant="icon-only" size="lg" className="btn-text-dark">
    <i className="modus-icon material-icons">settings</i>
  </Button>
  <Button variant="icon-only" size="lg" className="btn-text-secondary">
    <i className="modus-icon material-icons">settings</i>
  </Button>
</div>`

export const ButtonsFullWidth = `
<div className="d-grid gap-2">
  <Button variant="primary" block>
    Button
  </Button>
  <Button variant="outline-primary" block>
    Button
  </Button>
  <Button variant="text-primary" block>
    Button
  </Button>
</div>`

export const ButtonsDarkBackgrounds = `
<div>
  <Button variant="tertiary" className="mr-2">
    Button
  </Button>
  <Button variant="outline-tertiary" className="mr-2">
    Button
  </Button>
  <Button variant="text-tertiary" className="mr-2">
    Button
  </Button>
</div>`

export const ButtonsLight = `
<div className="bd-example">
  <div className="row">
    <div className="col">
      <Toast className="toast-dark" show>
        A Dark Toast.
        <Button variant="tertiary">Close</Button>
      </Toast>
      <Toast className="toast-dark" show>
        A Dark Toast.
        <Button variant="outline-tertiary">Close</Button>
      </Toast>
      <Toast className="toast-dark" show>
        A Dark Toast.
        <Button variant="text-tertiary">Close</Button>
      </Toast>
    </div>
    <div className="col">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="bg-trimble-blue-dark text-tertiary">
          <h4 className="card-title text-tertiary" id="card-title">
            Dark Element
          </h4>
          <p className="card-text">
            This can be any element with a dark colored background.
          </p>
          <Button href="#" variant="tertiary" className="mr-2">
            Regular
          </Button>
          <Button href="#" variant="outline-tertiary" className="mr-2">
            Outline
          </Button>
          <Button href="#" variant="text-tertiary">
            Text
          </Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>`

export const ButtonsDanger = `
<div>
  <Button variant="danger" className="mr-2">
    Delete
  </Button>
  <Button variant="danger" className="btn-icon-only mr-2">
    <i className="modus-icons">trash</i>
  </Button>
  <Button variant="text-danger" className="mr-2">
    Delete
  </Button>
  <Button variant="text-danger" className="btn-icon-only mr-2">
    <i className="modus-icons">trash</i>
  </Button>
</div>`

export const ButtonsYellow = `
<div>
  <Button variant="yellow" size="sm" className="mr-2">
    Trimble button
  </Button>
  <Button variant="yellow" className="mr-2">
    Trimble button
  </Button>
  <Button variant="yellow" size="lg">
    Trimble button
  </Button>
</div>`
