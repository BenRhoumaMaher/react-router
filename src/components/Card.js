/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom'

const Card = () => {
  const { user } = useParams()
  return (
    <div
      className='ui raised very padded text container segment'
      style={{ marginTop: '80px' }}
    >
      <h3 className='ui header'>Card belongs to {user}</h3>
    </div>
  )
}

export default Card
