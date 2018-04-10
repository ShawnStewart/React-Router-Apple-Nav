import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <nav className='Nav'>
                <ul className='Nav__ul'>
                    <li><NavLink to='/' className='NavLink Icon'><i class="fab fa-apple"></i></NavLink></li>
                    <li><NavLink to='/' className='NavLink'>Mac</NavLink></li>
                    <li><NavLink to='/' className='NavLink'>iPad</NavLink></li>
                    <li><NavLink to='/' className='NavLink'>iPhone</NavLink></li>
                    <li><NavLink to='/' className='NavLink'>Watch</NavLink></li>
                    <li><NavLink to='/' className='NavLink'>TV</NavLink></li>
                    <li><NavLink to='/' className='NavLink'>Music</NavLink></li>
                    <li><NavLink to='/' className='NavLink'>Support</NavLink></li>
                    <li><NavLink to='/' className='NavLink'><i class="fas fa-search"></i></NavLink></li>
                    <li><NavLink to='/' className='NavLink'><i class="fas fa-shopping-bag"></i></NavLink></li>
                </ul>
            </nav>
        );
    }
}