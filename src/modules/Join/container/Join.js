import React from 'react'
import JoinForm from '../component/JoinForm'
import '../component/join.css'
import JoinBanner from '../component/JoinBanner'
import JoinOurCommunity from '../component/JoinOurCommunity'

const Join = () => {
  return (
    <div>
      <JoinBanner/>
      <JoinOurCommunity />
      <JoinForm/>
      </div>
  )
}

export default Join