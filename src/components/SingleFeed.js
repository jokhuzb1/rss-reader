import React from 'react'
import { Card } from 'react-bootstrap'
export default function SingleFeed({ postItems }) {
  const { title, description, items } = postItems
  return (
    <>
      <h3>{title}</h3>
      <h5>{description}</h5>
      {items.map((item, index) => (
        <Card fluid='true' key={index} className='mb-3'>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Link target="_blank" href={item.link}>Read more...</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
