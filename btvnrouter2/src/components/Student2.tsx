import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Student2() {
    const [searchParams,setSearchParams]=useSearchParams('')
    const [studentName,setStudentName]=useState<string>('')
    const hi = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setStudentName(e.target.value) 
    }
    const nhap=()=>{
        setSearchParams({studentN
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          ame})
    }
    const p = searchParams.get("studentName")
  return (
    <div>
        
        <h4>Bai 3</h4>
      <input type="text" onChange={hi}/>
      <button onClick={nhap}>Nhap</button>
      <h4>Bai 4</h4>
      <p>name :{p}</p>
    </div>
  )
}
