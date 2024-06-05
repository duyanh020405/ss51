import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function David() {
  const [studentName, setName] = useState<string>('david')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setSearchParams({ studentName })
  },)

  let a = searchParams.get("studentName")

  return (
    <div>
      <p>Tên lấy được: {a}</p>
    </div>
  )
}
