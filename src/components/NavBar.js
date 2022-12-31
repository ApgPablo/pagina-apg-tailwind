import React from 'react'
import logoapg from '../assents/img/logoapg.png';
import apg from '../assents/img/yoapg.png';

const NavBar = () => {
  return (<div className="navbar bg-base-200">
  <div className="flex-1">
    <img className='w-32 cursor-pointer' src={logoapg} alt='Logo de apg'/>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Búsqueda" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img className='w-32 cursor-pointer' src={apg} alt='foto mia'/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">Nuevo</span>
          </a>
        </li>
        <li><a>Ajustes</a></li>
        <li><a>Cerrar Sesion</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar