import React from "react"
import Heading from "./Heading"

function LinkedHeading({ h, id, children, ...props }) {
  return (
    <Heading h={h} id={id} title={children} {...props}>
      <a
        className="header-link text-light text-decoration-none font-weight-normal ml-2"  href={`#${id}`} aria-label="anchor" aria-hidden="true"
      >#</a>
    </Heading>
  )
}

export default LinkedHeading
