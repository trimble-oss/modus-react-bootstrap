import React from "react"
import classNames from "classnames"

const Heading = ({ h, id, title, className, children }) => {
  const H = `h${h}`
  return (
    <H id={id} className={classNames(className, "font-weight-bold mt-5")}>
      {title}
      {children}
    </H>
  )
}

export default Heading
