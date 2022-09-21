export const CheckboxesBasic = `
<Form>
  <div key="custom-checkbox">
    <Form.Check custom type="checkbox" id="custom-checkbox" label="Checkbox" />
    <Form.Check
      custom
      type="checkbox"
      id="custom-checkbox"
      label="Checkbox"
      checked
    />
    <Form.Check
      custom
      type="checkbox"
      id="custom-checkbox"
      label="Checkbox"
      disabled
    />
  </div>
</Form>
`

export const CheckboxesInline = `
<Form>
  <div key="custom-inline-checkbox">
    <Form.Check
      custom
      inline
      type="checkbox"
      id="custom-inline-checkbox"
      label="Checkbox"
      className="mr-3"
    />
    <Form.Check
      custom
      inline
      type="checkbox"
      id="custom-inline-checkbox"
      label="Checkbox"
      checked
      className="mr-3"
    />
    <Form.Check
      custom
      inline
      type="checkbox"
      id="custom-inline-checkbox"
      label="Checkbox"
      disabled
      className="mr-3"
    />
  </div>
</Form>
`
