import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title}) => {
  return (
    <div>
        
            <button className='but' >
            {title}
            </button>
        {/* </Link> */}
        {/* <Link /> */}
    </div>
  )
}

export default Button