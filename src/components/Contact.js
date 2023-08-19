import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/card/maher' className='ui header'>
          Maher
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          debitis in expedita architecto, pariatur ratione repellendus
          repudiandae ab vitae eius. Beatae magni voluptatem praesentium hic quo
          error sequi, maiores molestias!
        </p>
      </div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/card/ahmed' className='ui header'>
          Ahmed
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          debitis in expedita architecto, pariatur ratione repellendus
          repudiandae ab vitae eius. Beatae magni voluptatem praesentium hic quo
          error sequi, maiores molestias!
        </p>
      </div>
    </div>
  )
}
export default Contact
