import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import MainContent from "../common/MainContent"

import Default from "./DefaultLayout"

import CodeBlock from "../common/CodeBlock"
import Overview from "../common/Overview"
import LinkedHeading from "../common/LinkedHeading"
import ComponentApi from "../common/ComponentApi"

//Modus Icon scripts not required for Home page
import { ModusIconsScripts } from "../common/ExternalDependencyHelper"

const propTypes = {
  location: PropTypes.object.isRequired,
}

const components = { CodeBlock, Overview, LinkedHeading, ComponentApi }

function MainLayout({ children, ...props }) {
  if (props.location.pathname.endsWith("/components/")) {
    return (
      <Default location={props.location} banner={true}>
        {children}
      </Default>
    )
  } else {
    return (
      <Default location={props.location} banner={true}>
        <ModusIconsScripts />
        <MainContent>
          <MDXProvider components={components}>{children}</MDXProvider>
        </MainContent>
      </Default>
    )
  }
}

MainLayout.propTypes = propTypes

export default MainLayout
