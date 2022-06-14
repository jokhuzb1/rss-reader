import React from 'react'

export default function ExampleLinks({ links, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {links.map((link) => (
        <ul key={link}>
          <li>
            {link}
          </li>
        </ul>
      ))}
    </div>
  )
}
