import React from 'react'
import './Toast.css'

function Toast({message}) {
  return (
    <div className='toastWrapper'>
        <div>{message}</div>
    </div>
  )
}

export default Toast