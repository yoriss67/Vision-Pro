import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Spline from '@splinetool/react-spline';
import ImgData from './ImgData';


function App() {

  return (
    <div className="">
      <div className='spline_container'>
        <Spline scene="https://prod.spline.design/yxJMNEUay7qCiAFM/scene.splinecode" />
      </div>

      <div className="text_container">
        <p>Try searching the icons and click!</p>
        <div className="icons_container">
          {ImgData.map((item, index) => (
            <div key={item.id} className="icon_container">
              <img className={`img ${item.className}`} src={`${item.img}`} alt={`Icon ${index}`} />
              {item.id !== 7 && (
                <img className='arrow' src="Arrows/Arrow 1.png" alt="" />
              )}
            </div>

          ))}

        </div>
      </div>

    </div>
  )
}

export default App
