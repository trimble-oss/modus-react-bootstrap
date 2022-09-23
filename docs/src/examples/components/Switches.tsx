export const SwitchesBasic = `
<Form>
  <Form.Check type="switch" id="custom-switch1" label="Switch" custom defaultChecked />
  <Form.Check type="switch" id="custom-switch2" label="Switch" custom />
  <Form.Switch
    disabled
    label="Disabled"
    id="disabled-custom-switch1"
    custom
    defaultChecked
  />
  <Form.Switch disabled label="Disabled" id="disabled-custom-switch2" custom />
</Form>
`
export const SwitchesInline = `
<Form>
  <Form.Check
    type="switch"
    id="ci-switch1"
    label="Switch"
    className="mr-4"
    custom
    defaultChecked
    inline
  />
  <Form.Check
    type="switch"
    id="ci-switch2"
    label="Switch"
    custom
    inline
    className="mr-4"
  />
  <Form.Switch
    disabled
    label="Disabled"
    id="disabled-ci-switch1"
    custom
    defaultChecked
    inline
    className="mr-4"
  />
  <Form.Switch
    disabled
    label="Disabled"
    id="disabled-ci-switch2"
    custom
    inline
    className="mr-4"
  />
</Form>
`
