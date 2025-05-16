

import React from 'react'
import { useState } from 'react'

const useOnlineCheck = () => {
    const [isOnline,onlineSetter]=useState(true)
    
    window.addEventListener("online",()=>{
        onlineSetter(true)
    })
    window.addEventListener("offline",()=>{
        onlineSetter(false)
    })
  return isOnline
}
export default useOnlineCheck