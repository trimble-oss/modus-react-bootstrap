import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, ContainerProps } from '../../../src'
import ComponentCard from './ComponentCard'
import { MenuContext } from './MenuContext'
import ThemeContext from './ThemeContext'

const ComponentsListing: React.FunctionComponent<ContainerProps> = () => {
  const { menu: childMenu } = useContext(MenuContext) || {}
  const [components, setComponents] = useState(childMenu)
  const { theme } = useContext(ThemeContext)

  if (!theme) return <></>

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase()
    setComponents(childMenu?.filter((item) => item.title.toLowerCase().includes(searchText)))
  }

  return (
    <Container fluid className='mb-5'>
      <Row>
        <Col>
          <Form className='w-100 mb-2'>
            <Form.Control
              id='search'
              type='text'
              placeholder='Start typing to filter...'
              className='w-100 search'
              size='lg'
              onChange={handleSearch}
            />
          </Form>
        </Col>
      </Row>
      <Row className='list'>
        {components?.map((item) => (
          <div className='col-12 col-lg-6 col-xl-4 my-3' key={item.key}>
            <ComponentCard title={item.title} image={item.key} theme={theme}>
              <p className='px-2 ml-n2'>
                <a href={item.path} className='stretched-link text-decoration-none text-muted'>
                  {item.subtitle}
                </a>
              </p>
            </ComponentCard>
          </div>
        ))}
      </Row>
    </Container>
  )
}

export default ComponentsListing
