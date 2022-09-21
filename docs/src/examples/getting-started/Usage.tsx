export const UsageExample = `
  //index.js
  import React from "react"; //React Core dependency
  import ReactDOM from "react-dom"; //React Core dependency
  import "@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap.min.css"; //CSS dependency
  import App from "./app"; //Page and components
  ...

  //app.js
  import React from "react";
  import { Button, DropdownButton, Dropdown, Card } from "@trimbleinc/modus-react-bootstrap";

  export default function App() {
    return (
      <Card style={{ width: "18rem" }} border="dark" className="shadow">
        <Card.Body>
          <Card.Title as="h4">Card title</Card.Title>
          <Card.Title as="h5">Card subtitle</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="secondary" size="sm"  className="m-2">
            Regular button
          </Button>
          <Button variant="tertiary" href="#" className="m-2">
            Link button
          </Button>
          <DropdownButton
            variant="primary"
            id="dropdown-basic-button"
            title="Anchor tag"
            href="#"
            className="m-2"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <br />
        </Card.Body>
      </Card>
    );
  }
`
