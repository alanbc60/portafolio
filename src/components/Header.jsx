// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Index.css'

function Header() {
  return (
    <header className="topbar">
            {/* logo */}
            <div>
                <h1>Alan Bastida</h1>
            </div>

            {/* cambia de tema al hacer click */}
            <div>
                <button type="button">
                    {/* <span className='material-symbols-outlined dark icon'>modo oscuro</span>
                    <span className='material-symbols-outlined light icon'>modo claro</span> */}
                </button>
            </div>
                
    </header>
  )
}

export default Header