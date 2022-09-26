import React from 'react'
import { Row, Col } from '../../../src'
import SideNav from './SideNav'
import TableOfContents from './TableOfContents'

const MainContent: React.FC<{ children: any }> = ({ children }) => {
  return (
    <main role='main' className='my-5 container'>
      <Row>
        <Col className='col-12 col-md-3 col-lg-2 menu-left'>
          <SideNav className='sticky-top sticky-offset border-bottom' />
        </Col>
        <Col xs={12} md={9} xl={8} id='rb-docs-content' className='main'>
          {children}
        </Col>
        <Col className='d-none d-xl-block menu-right pr-0' xl={2}>
          <TableOfContents></TableOfContents>
        </Col>
      </Row>
    </main>
  )
}

export default MainContent
