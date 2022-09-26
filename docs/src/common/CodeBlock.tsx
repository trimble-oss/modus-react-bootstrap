import React from 'react'
import CodePreview from './CodePreview'
import LinkedHeading from './LinkedHeading'

interface CodeBlockProps extends Omit<React.HTMLProps<HTMLDivElement>, 'scope' | 'style'> {
  bigtitle?: string
  title?: string
  subtitle1?: string
  subtitle2?: string
  scope?: { [key: string]: never }
  code: string
  noInline?: boolean
  style?: string
  hideCode?: boolean
  previewOnly?: boolean
}

const CodeBlock: React.FunctionComponent<CodeBlockProps> = ({
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
}) => {
  return (
    <div>
      {bigtitle && (
        <LinkedHeading h='2' className='h1' id={bigtitle.replace(/ /g, '')}>
          {bigtitle}
        </LinkedHeading>
      )}
      {title && (
        <LinkedHeading h='3' id={title.replace(/ /g, '')}>
          {title}
        </LinkedHeading>
      )}
      {subtitle1 && (
        <LinkedHeading h='4' id={subtitle1.replace(/ /g, '')}>
          {subtitle1}
        </LinkedHeading>
      )}
      {subtitle2 && (
        <LinkedHeading h='5' id={subtitle2.replace(/ /g, '')}>
          {subtitle2}
        </LinkedHeading>
      )}
      {props.children && <p>{props.children}</p>}
      {code && (
        <CodePreview
          code={code.trim().replace(';<', '<').replace(/>;$/, '>')}
          scope={scope}
          noInline={noInline}
          style={style}
          className={className}
          hideCode={hideCode}
          previewOnly={previewOnly}
        ></CodePreview>
      )}
    </div>
  )
}

export default CodeBlock
