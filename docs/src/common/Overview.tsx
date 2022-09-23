import React from "react"

const Overview = props => (
  <>
    <h2 className="h1 font-weight-bold" id="Overview">
      Overview
      <a
        className="header-link text-light text-decoration-none font-weight-normal ml-2"
        href={"#Overview"}
        aria-label="anchor"
      ></a>
    </h2>
    <p>{props.children}</p>
  </>
)

export default Overview
