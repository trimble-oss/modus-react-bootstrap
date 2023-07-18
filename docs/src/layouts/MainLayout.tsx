import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import MainContent from '../common/MainContent'

import Default from './DefaultLayout'

import CodeBlock from '../common/CodeBlock'
import Overview from '../common/Overview'
import LinkedHeading from '../common/LinkedHeading'
import ComponentApi from '../common/ComponentApi'

const components = { CodeBlock, Overview, LinkedHeading, ComponentApi }

const MainLayout: React.FC<{ location: any; children: any }> = ({ children, location }) => {
  if (location.pathname.endsWith('/components/')) {
    return (
      <Default location={location} banner={true}>
        {children}
      </Default>
    )
  } else {
    return (
      <Default location={location} banner={true}>
        <MainContent>
          <MDXProvider components={components}>{children}</MDXProvider>
        </MainContent>
      </Default>
    )
  }
}

export default MainLayout
