export const SlidersBasic = `
<Form>
  <Form.Group controlId="formBasicRangeCustom" custom>
    <Form.Label>Example Range</Form.Label>
    <Form.Control type="range" custom />
  </Form.Group>
  <Form.Group controlId="formBasicRangeDisabled" custom>
    <Form.Label>Disabled Range</Form.Label>
    <Form.Control type="range" custom disabled />
  </Form.Group>
</Form>
`

export const SlidersMinMax = `
<Form.Group controlId="formBasicRangeCustom" custom>
  <Form.Label>Example Range</Form.Label>
  <Form.Control type="range" custom min={0} max={5} />
</Form.Group>
`

export const SlidersStep = `
<Form.Group controlId="formBasicRangeCustom" custom>
  <Form.Label>Example Range</Form.Label>
  <Form.Control type="range" custom min={0} max={5} step={0.5} />
</Form.Group>
`
