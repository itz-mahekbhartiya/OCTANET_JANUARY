import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        // Navbar
        <nav class='navbar navbar-expand-lg'>
            <div className='container'>
                <a herf="#" class='navbar-brand'>
                    <h3 class="fw-bold">HBT</h3>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menuu" aria-controls="navbar-menuu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-menuu" class="collapse navbar-collapse justify-content-end align-center">
                    <ul class="navbar-nav">
                    <div className='home'>
                        <li class="nav-item">
                            {/* #f7c18b */}
                            <a class="nav-link" href="#"><span>Home</span></a>
                        </li>
                    </div>
                        <div className='about'>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        </div>
                        <div className='contact'>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar