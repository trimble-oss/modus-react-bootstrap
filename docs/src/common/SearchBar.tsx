import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Dropdown, Form, FormControl, FormControlProps } from '../../../src'
import useForceUpdate from '@restart/hooks/useForceUpdate'

const CustomToggle: React.FC<FormControlProps> = React.forwardRef<
  HTMLInputElement,
  FormControlProps
>(({ value, onChange }, ref) => {
  useEffect(() => {
    if (ref) {
      ;(ref as React.MutableRefObject<HTMLInputElement>).current?.focus()
    }
  }, [ref])

  return (
    <FormControl
      type='text'
      onChange={onChange}
      placeholder='Search'
      className='mr-sm-2 w-100'
      value={value}
      autoComplete='off'
      autoCorrect='off'
      spellCheck='false'
      autoCapitalize='off'
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
      }}
    />
  )
})
CustomToggle.displayName = 'CustomToggle'

const SearchBar: React.FC<unknown> = () => {
  const [results, setResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const cursor = -1

  const [show, setShow] = useState(false)
  const forceUpdate = useForceUpdate()

  const ref = useRef(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShow(false)
    },
    [setShow, dropdownRef],
  )

  const handleChange = useCallback(
    (e) => {
      const userInput = e.target.value as string
      setSearchQuery(userInput)
      if (userInput && userInput.length > 2 && window['__LUNR__']) {
        window['__LUNR__'].__loaded.then((lunr) => {
          const refs = lunr.en.index.search(
            userInput +
              '^100' +
              ' ' +
              userInput +
              '*^10' +
              ' ' +
              '*' +
              userInput +
              '^10' +
              ' ' +
              userInput +
              '~2^1',
          )

          const pages = refs.map(({ ref }) => lunr.en.store[ref])

          // Add Modus Icons site in search
          setResults(
            userInput.startsWith('icon')
              ? [
                  {
                    description: 'Open source icon library',
                    title: 'Modus Icons',
                    url: 'https://modus-icons.trimble.com/',
                  },
                  ...pages,
                ]
              : pages,
          )

          if (pages.length > 0) {
            setShow(true)
            forceUpdate()
          } else {
            setShow(false)
          }
        })
      } else setShow(false)
    },
    [setSearchQuery, setResults, setShow, forceUpdate],
  )

  useEffect(() => {
    //https://www.gatsbyjs.com/docs/using-client-side-only-packages/
    //Gatsby is a server side rendering framework, some apis, like window and document are not present during the build process,
    //so needed some additional checks
    if (!(typeof window === 'undefined' || !window.document)) {
      window.document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      if (!(typeof window === 'undefined' || !window.document)) {
        window.document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [handleClickOutside])

  return (
    <div ref={ref}>
      <Form inline className='ml-3 d-none d-md-inline-block'>
        <Form.Group controlId='formSearch'>
          <Dropdown className='w-100'>
            <Dropdown.Toggle
              as={CustomToggle}
              id='dropdown-custom-components'
              onChange={handleChange}
              value={searchQuery}
            ></Dropdown.Toggle>
            <Dropdown.Menu
              show={show}
              ref={dropdownRef}
              className={`w-100 autocomplete-suggestions ${show && 'show'} pb-1 pt-1`}
            >
              {results?.map((page, index) => {
                const openInNewTab = (page['url'] as string)?.startsWith('http')
                  ? {
                      target: '_blank',
                      rel: 'noopener',
                    }
                  : {}
                return (
                  <Dropdown.Item
                    active={cursor > -1 && index === cursor}
                    eventKey={page['title']}
                    key={page['title']}
                    href={page['url']}
                    {...openInNewTab}
                    className='autocomplete-suggestion pl-2'
                  >
                    » {page['title']}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchBar
