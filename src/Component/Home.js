import React from 'react'
import Nav from './Nav'
import './Style.css'
import Counter from './Counter'
export default function Home() {
  return (
    <>
    <Nav />
    <Counter />
    <div className='home'>This is Home page</div>
    </>
  )
}
