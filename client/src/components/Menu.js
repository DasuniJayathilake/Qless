import React from 'react'

export default function Menu() {
  return (
    <div>
        <div className='container' style={{margin:'225px'}}>
            <a style={{margin:'50px'}} href={'/dashboard'} className='btn btn-primary' >Admin Module</a>
            <a style={{margin:'50px'}} href={'/visitor/login'} className='btn btn-primary' >Visitor Module</a>
            <a style={{margin:'50px'}} href={'/dashboard'} className='btn btn-primary' >Host Module</a>
            <a style={{margin:'50px'}} href={'/dashboard'} className='btn btn-primary' >Main Module</a>
        </div>
    </div>
  )
}
