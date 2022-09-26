import React from 'react'
import { Card, CardProps } from '../../../src'

interface ComponentCardProps extends CardProps {
  title: string
  image?: string
  theme?: string
}

const ComponentCard: React.FunctionComponent<ComponentCardProps> = ({
  title,
  image,
  theme,
  children,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cardImg = require(`../assets/img/components/${image}${theme === 'dark' ? '-dark' : ''}.png`)

  return (
    <Card {...props} className='card-blog-brief h-100 border bg-light shadow-sm'>
      <Card.Img variant='top' src={cardImg.default} />
      <Card.Body className='bg-white'>
        <Card.Title as='h3' className='px-2 ml-n2 name'>
          {title}
        </Card.Title>
        {children}
      </Card.Body>
    </Card>
  )
}

export default ComponentCard
