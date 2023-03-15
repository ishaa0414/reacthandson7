import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
   <>
   <div className='flex'>
   <Link to='/' className='div'>Home</Link>
   <Link to='/student' className='div'>Student</Link>
   <Link to='/contact' className='div'>Contact Us</Link>
   </div>
   </>
  )
}
