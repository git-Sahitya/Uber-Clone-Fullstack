import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectWrapper = ({
    children
}) => {
     const token  = localStorage.getItem('token')
    const navigate = useNavigate()

    const {captain , setcaptain} = useContext(CaptainDataContext)

    useEffect(()=>{
      if(!token){
        navigate('/captain-login')
    }
    },[token])
  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtectWrapper
