import React from 'react'
import { TiTick } from 'react-icons/ti'
import './join.css'

const Success = ({formData}) => {
  console.log(formData)
  return (
    <div className='comfirmation-container'>
      <TiTick size="200px" style={{borderRadius:'50%', border:"8px solid #425F57", color:"#425F57"}}/>
      <h2>{`Thank you, ${formData.firstname}`}</h2>
      <p>Your form was successfully submitted!</p>
      </div>
  )
}

export default Success;