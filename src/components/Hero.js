import React from 'react'
import nina from '../assents/img/nina.jpg';
import uno from '../assents/img/uno.jpg';
import dos from '../assents/img/dos.jpg';
import tres from '../assents/img/tres.jpg';
import cuatro from '../assents/img/cuatro.jpg';
import cinco from '../assents/img/cinco.jpg';

const Hero = () => {
  return (
    <div>

<div className="hero min-h-screen" >
<img className='hero min-h-screen' src={nina} alt='Logo de apg'/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">¡Hola!</h1>
      <p className="mb-5">De los gatos he aprendido que por mucha prisa que lleves, siempre puedes detenerte durante un momento para rascarte detrás de la oreja</p>
      <button className="btn btn-primary">Empezar</button>
    </div>
  </div>


  </div>



  <div>
    <h1> Galería de Fotos</h1>
  </div>


<div style={{
  display: 'flex', /* Usar flexbox */
  alignItems: 'center', /* Centrar el div horizontalmente */
  justifyContent: 'center' /* Centrar el div verticalmente */
}}>
  <div className="carousel carousel-center w-96  rounded-box "  >
  <div id="slide1" className="carousel-item relative w-full">
  <img className=' cursor-pointer' src={uno} alt='Logo uno'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img className=' cursor-pointer' src={dos} alt='Logo dos'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img className=' cursor-pointer' src={tres} alt='Logo tres'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img className=' cursor-pointer' src={cuatro} alt='Logo cuatro'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <img className=' cursor-pointer' src={cinco} alt='Logo cinco'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

</div>





</div>



  )
}

export default Hero