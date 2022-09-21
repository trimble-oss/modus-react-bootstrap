import kebabCase from "lodash/kebabCase"
import React from "react"
import PropTable from "./PropTable"
import styled from "styled-components"
import { graphql } from "gatsby"

const propTypes = {}

const Keyword = styled("span")`
  color: #a626a4;
`
const Code = styled("code")`
  padding: 0;
  display: inline-block;
  color: #50a14f;
  background-color: transparent;
`

function ComponentApi({ heading, metadata, exportedBy }) {
  let { description, displayName: name } = metadata
  let descHtml = description && description.childMarkdownRemark.html

  if (exportedBy) {
    name = `${exportedBy.displayName}.${name
      .split(exportedBy.displayName)
      .pop()}`
  }

  const id = `${kebabCase(name)}-props`
  return (
    <>
      <h3 className="font-weight-bold mt-3" id={id} title={name}>
        {name}
        <a
          className="header-link text-light text-decoration-none font-weight-normal ml-2"
          href={`#${id}`}
          aria-label="anchor" aria-hidden="true"
        >#</a>
      </h3>

      <Code aria-label={`Import code for the ${name} component`}>
        <Keyword>import</Keyword> {name} <Keyword>from</Keyword>{" "}
        `@trimbleinc/modus-react-bootstrap/
        {name}`
      </Code>
      {/* use composes here */}
      {/* eslint-disable-next-line react/no-danger */}
      {descHtml && <div dangerouslySetInnerHTML={{ __html: descHtml }} />}
      <PropTable metadata={metadata} />
    </>
  )
}

ComponentApi.propTypes = propTypes

export default ComponentApi

export const metadataFragment = graphql`
  fragment ComponentApi_metadata on ComponentMetadata {
    composes
    displayName
    description {
      childMarkdownRemark {
        html
      }
    }
    ...PropTable_metadata
  }
`
