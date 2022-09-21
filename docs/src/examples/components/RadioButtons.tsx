export const RadioButtonsBasic = `
<div className="d-flex">
  <FormGroup>
    <Form.Check type="radio" id="radio1" custom checked label="Radio 1" />
    <Form.Check type="radio" id="radio2" custom label="Radio 2" />
  </FormGroup>
  <FormGroup className="ml-3">
    <Form.Check
      type="radio"
      id="radio1"
      custom
      checked
      label="Disabled"
      disabled
    />
    <Form.Check type="radio" id="radio2" custom disabled label="Disabled" />
  </FormGroup>
</div>
`
