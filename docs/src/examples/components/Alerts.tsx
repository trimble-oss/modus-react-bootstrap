export const AlertsBasic = `
<div>
  <Alert key="a1" variant="primary">
    <i className="modus-icon material-icons alert-icon">info</i>A basic Primary
    alert
  </Alert>
  <Alert key="a2" variant="secondary">
    <i className="modus-icon material-icons alert-icon">help</i>A basic
    secondary alert with a button
    <a href="#" className="btn btn-sm btn-text-secondary">
      Button
    </a>
  </Alert>
  <Alert key="a3" variant="dark">
    <i className="modus-icon material-icons alert-icon">info</i>
    <div>A basic <u>dark alert</u> with <em>text formatting</em></div>
  </Alert>
  <AlertDismissible key="a4" variant="success">
    <i className="material-icons alert-icon">check_circle</i>Success! A basic
    success alert with a dismiss icon
  </AlertDismissible>
  <AlertDismissible key="a5" variant="danger">
    <i className="material-icons alert-icon">error</i>Error! A basic error alert
    with a dismiss icon
  </AlertDismissible>
  <AlertDismissible key="a6" variant="warning" className="text-dark">
    <i className="modus-icon material-icons alert-icon">warning</i>Warning! A
    basic warning alert with dark text and a dismiss icon
  </AlertDismissible>
</div>
`
export const AlertsWithLink = `
<Alert key="a1" variant="primary">
  <div>
    This is a primary alert with{" "}
    <Alert.Link href="#"> an example link</Alert.Link>. Give it a click if
    you like.
  </div>
</Alert>
`
export const AlertsWithButton = `
<Alert key="a2" variant="primary">
  <i className="modus-icon material-icons alert-icon">info</i>A basic primary
  alert with a button
  <a href="#" className="btn btn-sm btn-text-primary">
    Button
  </a>
</Alert>
`
export const AlertsDismissible = `
<AlertDismissible key="a2" variant="primary">
  A basic primary alert with a dismiss icon
</AlertDismissible>
`
