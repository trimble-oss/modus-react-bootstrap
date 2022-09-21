import * as React from "react"
import { Col, Row } from "../../../src"
import DefaultLayout from "../layouts/DefaultLayout"

const CookiesPage = props => {
  return (
    <DefaultLayout
      location={props.location}
      title="Cookies Policy"
      banner={true}
    >
      <main id="main" className="my-5 container">
        <Row>
          <Col className="col-12 col-md-3 col-lg-2 menu-left"></Col>
          <Col xs={12} md={9} xl={8} id="rb-docs-content" className="main">
            <p>
              "Cookies" are pieces of information that a web site transfers to
              an individual's hard drive for record-keeping purposes. We don't
              use any on this site.
            </p>
            <div id="optanon-cookie-policy" hidden></div>
            <br />
            <br />
            {/*  OneTrust Cookies Settings button start  */}
          </Col>
          <Col className="d-none d-xl-block menu-right" xl={2}></Col>
        </Row>
      </main>
    </DefaultLayout>
  )
}

export default CookiesPage
