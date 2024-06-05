import React from 'react'
import { useParams } from 'react-router-dom'

export default function Id() {
    const {id}=useParams()
  return (
    <div>
        <h4>Bai 1</h4>
      <p>id nhan duoc :{id}</p>
    </div>
  )
}
