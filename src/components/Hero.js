import React from 'react'
import nina from '../assents/img/nina.jpg';
import uno from '../assents/img/uno.jpg';
import dos from '../assents/img/dos.jpg';
import tres from '../assents/img/tres.jpg';
import cuatro from '../assents/img/cuatro.jpg';
import cinco from '../assents/img/cinco.jpg';

const Hero = () => {
  return (<div style={{ position: 'relative' }}>
  <img className='w-auto cursor-pointer' src={nina} alt='Logo de nina'/>
   <div className="hero-overlay bg-opacity-60"  style={{ position: 'absolute' ,top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
     <div className="hero-content text-center text-neutral-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
       <div className="max-w-md">
         <h1 className="mb-5 text-5xl font-bold">Hola!</h1>
           <p className="mb-5">Prefiero una actitud de humildad que se corresponda a la debilidad de nuestra capacidad intelectual para comprender la naturaleza de nuestro propio ser.      

      Albert Einstein.</p>
                  <button className="btn btn-primary cursor-grab">Empezar</button>

    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'row' }}>

  <div className="card w-96 bg-base-100 shadow-xl" style={{ marginRight: '10px', marginLeft: '10px' }}><font></font>
  <div className="card-body"  >
    <h2 className="card-title">Descansando</h2>
  </div>
  <figure><img className='w-80 cursor-pointer' src={uno} alt='Logo uno'/></figure><font></font>
</div>
<div className="card w-96 bg-base-100 shadow-xl" style={{ marginRight: '10px', marginLeft: '10px' }}><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">Con su hermano mayor</h2><font></font>
    <font></font>
  </div><font></font>
  <figure><img className='w-auto cursor-pointer' src={dos} alt='Logo dos'/></figure><font></font>
</div>
<div className="card w-96 bg-base-100 shadow-xl" style={{ marginRight: '10px', marginLeft: '10px' }}><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">Mirandome</h2><font></font>
    <font></font>
  </div><font></font>
  <figure><img className='w-auto cursor-pointer' src={tres} alt='Logo tres'/></figure><font></font>
</div>
<div className="card w-96 bg-base-100 shadow-xl"style={{ marginRight: '10px', marginLeft: '10px' }}><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">Posando con el arbolito</h2><font></font>
    <font></font>
  </div><font></font>
  <figure><img className='w-auto cursor-pointer' src={cuatro} alt='Logo cuatro'/></figure><font></font>
</div>

<div className="card w-96 bg-base-100 shadow-xl"style={{ marginRight: '10px', marginLeft: '10px' }}><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">Durmiendo</h2><font></font>
    <font></font>
  </div><font></font>
  <figure><img className='w-auto cursor-pointer' src={cinco} alt='Logo cinco'/></figure><font></font>
</div>


</div>

</div>

  )
}

export default Hero