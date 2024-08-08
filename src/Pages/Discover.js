import React from 'react'
import Search from '../Components/Search'
import bg from '../Images/Background/bg3-1.jpg'
import Navbar from '../Components/Navbar'
import TypingEffect from '../Components/TypingEffect'
import '../Css/Home.css';
import obs from '../Images/Background/Obsession.jpg'
export default function Discover() {
  return (
    <div id="discover">
    <div style={{position:"fixed",height:"100%",width:"100%",zIndex:"-1"}}>
    <img src={bg} height={"100%"} width={"100%"} style={{objectFit:"cover"}}/>
  </div>
   <Navbar/>
   <br></br>
   <br></br>
   <TypingEffect text="Seeking your next book obsession?" className="line" /><br></br>
    
    <Search/>
    <br></br>
    </div>
  )
}
