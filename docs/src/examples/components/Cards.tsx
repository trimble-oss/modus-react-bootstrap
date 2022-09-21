export const CardsBasic = `
<Card style={{ width: "18rem" }}>
  <Card.Body>
    <Card.Title as="h4">Card title</Card.Title>
    <Card.Title as="h5" className="mb-2 text-muted">Card subtitle</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="#">
      Go somewhere
    </Button>
  </Card.Body>
</Card>
`

export const CardsWithImage = `
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="https://fakeimg.pl/286x150/" alt="" />
  <Card.Body>
    <Card.Title as="h4">Card title</Card.Title>
    <Card.Title as="h5">Card subtitle</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
`
export const CardsHeaderAndFooter = `
<Card style={{ width: "18rem" }}>
  <Card.Header>Card Header</Card.Header>
  <Card.Body>
    <Card.Title as="h4">Card title</Card.Title>
    <Card.Title as="h5">Card subtitle</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Footer>Card Footer</Card.Footer>
</Card>
`

export const CardsCustomize = `
<Card style={{ width: "18rem" }} border="dark" className="shadow">
  <Card.Img variant="top" src="https://fakeimg.pl/286x150/" alt="" />
  <Card.Body>
    <Card.Title as="h3">Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>List Item</ListGroupItem>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      List with Badge
      <Badge pill variant="primary">
        14
      </Badge>
    </li>
    <ListGroupItem>List Item</ListGroupItem>
  </ListGroup>
  <Card.Body className="text-right">
    <Card.Link href="#">Link</Card.Link>
    <Button href="#" style={{ marginLeft: "10px" }}>
      Button
    </Button>
  </Card.Body>
</Card>
`
