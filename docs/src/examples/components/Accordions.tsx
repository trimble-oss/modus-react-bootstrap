export const AccordionsBasic = `
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h6 className="mb-0" id="collapsible-group-item-1">
        Collapsible Group Item #1
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h6 className="mb-0" id="collapsible-group-item-2">
        Collapsible Group Item #2
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h6 className="mb-0" id="collapsible-group-item-3">
        Collapsible Group Item #3
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
`

export const AccordionsBorderless = `
<Accordion defaultActiveKey="0" className="borderless">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h6 className="mb-0" id="collapsible-group-item-1">
        Collapsible Group Item #1
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h6 className="mb-0" id="collapsible-group-item-2">
        Collapsible Group Item #2
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h6 className="mb-0" id="collapsible-group-item-3">
        Collapsible Group Item #3
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
`

export const AccordionsSmall = `
<Accordion defaultActiveKey="0" className="accordion-sm">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h6 className="mb-0" id="collapsible-group-item-1">
        Collapsible Group Item #1
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h6 className="mb-0" id="collapsible-group-item-2">
        Collapsible Group Item #2
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h6 className="mb-0" id="collapsible-group-item-3">
        Collapsible Group Item #3
      </h6>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
`

export const AccordionsList = `
<ul className="list-group">
  <li className="list-group-item">List Item</li>
  <li className="list-group-item">List Item</li>
  <li className="list-group-item py-0">
    <Accordion className="borderless" style={{ width: "100%" }}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h6 className="mb-0" id="collapsible-group-item-1">
            Collapsible Group Item #1
          </h6>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </li>
  <li className="list-group-item">List Item</li>
  <li className="list-group-item">List Item</li>
</ul>
`
