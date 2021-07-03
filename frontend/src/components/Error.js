import React from 'react'

export default function Error({error}) {
  return (
    <div>
      <div className="alert alert-danger" role="alert" style={{height:'auto' ,width:'auto',textAlign:'center'}}>
{error}</div>
    </div>
  )
}
