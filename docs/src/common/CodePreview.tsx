import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  createContext,
} from "react"
import ReactDOM from "react-dom"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import vsDark from "prism-react-renderer/themes/vsDark"
import vsLight from "prism-react-renderer/themes/vsLight"
import * as ReactBootstrap from "../../../src"
import styled from "styled-components"
import ThemeContext from "./ThemeContext"

const StyledAccordion = styled(ReactBootstrap.Accordion)`
  .card-header::after {
    display: none !important;
  }
`
const CodePreview = props => {
  const scope = {
    ReactDOM,
    useEffect,
    useRef,
    useState,
    useContext,
    useCallback,
    createContext,
    useMemo,
    ...ReactBootstrap,
    ...props.scope,
  }

  const { theme } = useContext(ThemeContext)
  const [toggle, setToggle] = useState(props.hideCode)
  const toggleCode = () => {
    setToggle(prevState => !prevState)
  }

  if (!theme) return <></>

  return (
    <div className="guide-example-block">
      <LiveProvider
        noInline={props.noInline}
        code={props.code}
        scope={scope}
        theme={theme === "light" ? vsLight : vsDark}
      >
        <div
          className="guide-example-block shadow-sm"
          style={{ ...props.style }}
        >
          <div className="guide-sample w-100">
            <LivePreview className={props.className} />
          </div>

          {!props.previewOnly && (
            <StyledAccordion
              className="guide-code-options bg-light d-sm-flex align-items-center border-top border-gray-200"
              defaultActiveKey={toggle ? null : "0"}
            >
              <ReactBootstrap.Card className="w-100">
                <ReactBootstrap.Card.Header className="w-100 m-0 p-0">
                  <div className="d-flex justify-content-end w-100">
                    <div>
                      <ReactBootstrap.Accordion.Toggle
                        onClick={toggleCode}
                        as={ReactBootstrap.Nav.Link}
                        variant="link"
                        eventKey="0"
                      >
                        {toggle ? "Show Code" : "Hide Code"}
                      </ReactBootstrap.Accordion.Toggle>
                    </div>
                  </div>
                </ReactBootstrap.Card.Header>
                <ReactBootstrap.Accordion.Collapse eventKey="0">
                  <ReactBootstrap.Card.Body className="p-0">
                    <LiveEditor className="highlight mb-0" />
                  </ReactBootstrap.Card.Body>
                </ReactBootstrap.Accordion.Collapse>
              </ReactBootstrap.Card>
            </StyledAccordion>
          )}
          <LiveError />
        </div>
      </LiveProvider>
    </div>
  )
}

export default CodePreview
