export const InputsBasic = `
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Regular Input</Form.Label>
    <Form.Control as="input" placeholder="Placeholder Text"></Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Input with Icon on right</Form.Label>
    <div className="input-with-icon-right">
      <Form.Control as="input" placeholder="Placeholder Text"></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">visibility</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Input with Icon on left</Form.Label>
    <div className="input-with-icon-left">
      <Form.Control as="input" placeholder="Placeholder Text"></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">search</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Input with a button</Form.Label>
    <InputGroup className="mb-2">
      <FormControl id="inlineFormInputGroup" placeholder="Placeholder Text" />
      <InputGroup.Append>
        <Button variant="outline-secondary">Go</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>

  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Custom select Outlined</Form.Label>
    <Form.Control as="select" custom>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`

export const InputsStates = `
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Label</Form.Label>
    <div className="input-with-icon-left">
      <Form.Control
        as="input"
        className="focus"
        placeholder="Focus"
      ></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">search</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Label</Form.Label>
    <div className="input-with-icon-left">
      <Form.Control as="input" isValid placeholder="Valid"></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">search</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Label</Form.Label>
    <div className="input-with-icon-left">
      <Form.Control as="input" isInvalid placeholder="Invalid"></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">search</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Label</Form.Label>
    <div className="input-with-icon-left">
      <Form.Control as="input" disabled placeholder="Disabled"></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">search</i>
      </div>
    </div>
  </Form.Group>
</Form>
`

export const InputsFeedback = `
<Form>
  <Form.Group controlId="validationCustom02">
    <Form.Label>Valid Feedback</Form.Label>
    <Form.Control required type="text" isValid placeholder="This is valid" />
    <Form.Control.Feedback type="valid">
      This is valid feedback
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="validationCustom02">
    <Form.Label>Valid Feedback</Form.Label>
    <Form.Control
      required
      type="text"
      isInvalid
      placeholder="This is invalid"
    />
    <Form.Control.Feedback type="invalid">
      This is invalid feedback
    </Form.Control.Feedback>
  </Form.Group>
</Form>
`

export const InputsLarge = `
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="label-lg">Regular Input</Form.Label>
    <Form.Control
      as="input"
      size="lg"
      placeholder="Placeholder Text"
    ></Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="label-lg">Input with Icon on right</Form.Label>
    <div className="input-with-icon-right">
      <Form.Control
        as="input"
        size="lg"
        placeholder="Placeholder Text"
      ></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">visibility</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="label-lg">Input with Icon on left</Form.Label>
    <div className="input-with-icon-left">
      <Form.Control
        as="input"
        size="lg"
        placeholder="Placeholder Text"
      ></Form.Control>
      <div className="input-icon">
        <i className="modus-icon material-icons">search</i>
      </div>
    </div>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="label-lg">Input with a button</Form.Label>
    <InputGroup className="mb-2">
      <FormControl
        id="inlineFormInputGroup"
        placeholder="Placeholder Text"
        size="lg"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Go</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label className="label-lg">Custom select Outlined</Form.Label>
    <Form.Control as="select" size="lg">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`

export const InputsTextArea = `
<Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Normal Text Area</Form.Label>
    <Form.Control as="textarea" rows={2}>
      Some Text
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="label-lg">Normal Text Area</Form.Label>
    <Form.Control as="textarea" rows={2} size="lg">
      Some Text
    </Form.Control>
  </Form.Group>
</Form>
`

export const InputsReadonly = `<Form.Control type="text" placeholder="Readonly input here..." readOnly />`

export const InputsReadOnlyPlainText = `
<Form>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
`

export const InputsFormGroups = `
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
`

export const InputsFormGrid = `
<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
`

export const InputsFormRow = `
<Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
</Form>
`

export const InputsFormRowMore = `
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign in
  </Button>
</Form>
`

export const InputsHorizontalForm = `
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2} className="pt-0">
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          custom
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          custom
        />
        <Form.Check
          type="radio"
          label="third disabled radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          custom
          disabled
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Example Checkbox" custom />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
`

export const InputsLabelSizing = `
<Form.Group>
  <Form.Row>
    <Form.Label column lg={2}>
      Normal Text
    </Form.Label>
    <Col>
      <Form.Control type="text" placeholder="Normal text" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Large Text
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Large text" />
    </Col>
  </Form.Row>
</Form.Group>
`

export const InputsColumnSizing = `
<Form>
  <Form.Row>
    <Col xs={7}>
      <Form.Control placeholder="City" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Form.Control placeholder="Zip" />
    </Col>
  </Form.Row>
</Form>
`

export const InputsAutoSizing = `
<Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
        custom
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Form.Row>
</Form>
`

export const InputsAutoSizingMore = `
<Form>
  <Form.Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
        Username
      </Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto" className="my-1">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck2"
        label="Remember me"
        custom
      />
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Row>
</Form>
`

export const InputsInlineForms = `
<Form inline>
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Name
  </Form.Label>
  <Form.Control
    className="mb-2 mr-sm-2"
    id="inlineFormInputName2"
    placeholder="Jane Doe"
  />
  <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
    Username
  </Form.Label>
  <InputGroup className="mb-2 mr-sm-2">
    <InputGroup.Prepend>
      <InputGroup.Text>@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" />
  </InputGroup>
  <Form.Check
    type="checkbox"
    className="mb-2 mr-sm-2"
    id="inlineFormCheck"
    label="Remember me"
  />
  <Button type="submit" className="mb-2">
    Submit
  </Button>
</Form>
`

export const InputsHelpText = `
<div>
  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
</div>
`

export const InputsInlineText = `
<Form inline>
  <Form.Group>
    <Form.Label htmlFor="inputPassword6">Password</Form.Label>
    <Form.Control
      type="password"
      className="mx-sm-3"
      id="inputPassword6"
      aria-describedby="passwordHelpInline"
    />
    <Form.Text id="passwordHelpInline" muted>
      Must be 8-20 characters long.
    </Form.Text>
  </Form.Group>
</Form>
`

export const InputsDisabledForms = `
<Form.Group>
  <Form.Label>Disabled input</Form.Label>
  <Form.Control placeholder="Disabled input" disabled />
</Form.Group>
`

export const InputsDisabledFormsMore = `
<Form>
  <fieldset disabled>
    <Form.Group>
      <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="Disabled input" />
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
      <Form.Control as="select" id="disabledSelect">
        <option>Disabled select</option>
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Check
        type="checkbox"
        id="disabledFieldsetCheck"
        label="Can't check this"
        custom
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </fieldset>
</Form>
`

export const InputsFileBrowser = `
<Form>
  <Form.File id="custom-file" label="Choose file" custom />
</Form>
`

export const InputsTranslation = `
<Form>
  <Form.File
    id="custom-file-translate-scss"
    label="Custom file input"
    lang="es"
    custom
  />
</Form>
`

export const InputsTranslatingWithHtml = `
<Form>
  <Form.File
    id="custom-file-translate-html"
    label="Voeg je document toe"
    data-browse="Bestand kiezen"
    custom
  />
</Form>
`
