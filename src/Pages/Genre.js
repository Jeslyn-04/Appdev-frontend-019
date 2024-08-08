import React from 'react'
import GenreGrid from '../Components/GenreGrid'
import Navbar from '../Components/Navbar'
import bg from '../Images/Background/bg3-1.jpg'

export default function Genre() {
  return (
    <div>
    <div className="background">
          <img src={bg} alt="Background Image" />
        </div>
    <Navbar/>
    <GenreGrid />
    </div>
  )
}
