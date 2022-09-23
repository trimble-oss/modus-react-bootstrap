import React, { useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import vsLight from 'prism-react-renderer/themes/vsLight'
import styled from 'styled-components'
import classNames from 'classnames'
import ThemeContext from './ThemeContext'

const StyledPre = styled.pre`
  text-align: left;
  padding: 0.5em;
  overflow: auto;
  height: 100%;
  margin-bottom: 0 !important;
  font-size: inherit !important;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`
type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml'

interface CodeBlockProps extends React.HTMLProps<HTMLDivElement> {
  code: string
  language: Language
}

const CodeHighlight: React.FunctionComponent<CodeBlockProps> = ({
  code,
  className = '',
  language = 'jsx',
  ...props
}) => {
  const { theme } = useContext(ThemeContext)

  if (!(code && theme)) return <></>
  const codeText = code.trim().replace(';<', '<').replace(/>;$/, '>')
  return (
    <div className={classNames('highlight p-2', className)} {...props}>
      <Highlight
        {...defaultProps}
        theme={theme === 'light' ? vsLight : vsDark}
        code={codeText}
        language={language}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <StyledPre className={className}>
            {tokens.map((line, i) => (
              <div key={`line${i}`} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={`token${key}`} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </StyledPre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeHighlight
