import React from 'react'

const ConditionalList = ({ layout = "bullet", items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No items to display.</p>
  }

  if (layout === "numbered") {
    return (
      <ol type="1" className="list-decimal pl-6">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    )
  }

  if (layout === "alpha") {
    return (
      <ol type="a" className="list-[lower-alpha] pl-6">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    )
  }

  // Default bullet list
  return (
    <ul className="list-disc pl-6">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
}

export default ConditionalList
