import React from "react"
import CodePreview from "./CodePreview"
import LinkedHeading from "./LinkedHeading"
import * as PropTypes from "prop-types"

interface CodeBlockProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "scope" | "style"> {
  bigtitle?: string
  title?: string
  subtitle1?: string
  subtitle2?: string
  scope?: object
  code: string
  noInline?: boolean
  style?: string
  hideCode?: boolean
  previewOnly?: boolean
}

const CodeBlock = ({
  bigtitle,
  title,
  subtitle1,
  subtitle2,
  scope,
  code,
  noInline,
  style,
  className,
  hideCode,
  previewOnly,
  ...props
}: CodeBlockProps) => {
  const codePreview = (
    code,
    scope,
    noInline,
    style,
    className,
    previewOnly
  ) => {
    if (!code) return null
    let codeText = code.trim().replace(";<", "<").replace(/>;$/, ">")

    return (
      <CodePreview
        code={codeText}
        scope={scope}
        noInline={noInline}
        style={style}
        className={className}
        hideCode={hideCode}
        previewOnly={previewOnly}
      ></CodePreview>
    )
  }

  return (
    <div>
      {bigtitle && (
        <LinkedHeading h="2" className="h1" id={bigtitle.replace(/ /g, "")}>
          {bigtitle}
        </LinkedHeading>
      )}
      {title && (
        <LinkedHeading h="3" id={title.replace(/ /g, "")}>
          {title}
        </LinkedHeading>
      )}
      {subtitle1 && (
        <LinkedHeading h="4" id={subtitle1.replace(/ /g, "")}>
          {subtitle1}
        </LinkedHeading>
      )}
      {subtitle2 && (
        <LinkedHeading h="5" id={subtitle2.replace(/ /g, "")}>
          {subtitle2}
        </LinkedHeading>
      )}
      {props.children && <p>{props.children}</p>}
      {codePreview(code, scope, noInline, style, className, previewOnly)}
    </div>
  )
}

const propTypes = {
  bigtitle: PropTypes.string,
  title: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  scope: PropTypes.object,
  code: PropTypes.string,
  noInline: PropTypes.bool,
  style: PropTypes.string,
  codeOnly: PropTypes.bool,
}
CodeBlock.propTypes = propTypes

export default CodeBlock
