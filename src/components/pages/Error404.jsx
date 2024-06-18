import React from 'react'
import { NavLink } from "react-router-dom";


const Error404 = () => {
  return (
    <div className="error_all">
    <h1 className="code404">404</h1>
    <NavLink to="/" className="nav-link">
    <p className="error_text_1">Oups! La page que vous demandez n'existe pas.</p>
    <li className='error_text_2'>Retourner sur la page d'accueil</li>
    </NavLink>
    </div>
  )
}

export default Error404

