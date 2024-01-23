import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Spline from '@splinetool/react-spline';


function App() {

  return (
    <div className="">
      <div className='spline_container'>
        <Spline scene="https://prod.spline.design/yxJMNEUay7qCiAFM/scene.splinecode" />
      </div>

      <div className="text_container">
          <p>Click me</p>

        <div className="click_search">
          <img src="New Search.svg" alt="" />
        </div>

        <img className='arrows arrow1' src="Arrows/Arrow 1.png" alt="" />

        <div className="click_input">
          {/* <p>Click</p> */}
          <img src="Input.svg" alt="" />
        </div>

        <img className='arrows arrow2' src="Arrows/Arrow 2.png" alt="" />

        <div className="click_high">
          {/* <p>You might wanna listen to "High".</p> */}
          <img className='high' src="/Spotify/songs/High.jpeg" alt="" />
        </div>

        <img className='arrows arrow3' src="Arrows/Arrow 3.png" alt="" />

        <div className="click_microphone1">
          <img src="Micro.svg" alt="" />
        </div>

        <img className='arrows arrow4' src="Arrows/Arrow 4.png" alt="" />

        <div className="click_microphone2">
          <img src="Micro.svg" alt="" />
        </div>

        <img className='arrows arrow5' src="Arrows/Arrow 5.png" alt="" />

        <div className="click_arrow">
          <img src="Open Arrow.svg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default App
