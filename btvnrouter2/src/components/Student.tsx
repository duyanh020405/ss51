import React from 'react'
import { useParams } from 'react-router-dom'
export default function Student() {
    const {name} = useParams()
    
    
  return (
    <div>
        <h4>Bai 2</h4>
      <p>{name}</p>
    </div>
  )
}
