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
                    <li><NavLink to='/' className='NavLink Icon'><i className="fab fa-apple"></i></NavLink></li>
                    <li><NavLink to='/mac' className='NavLink'>Mac</NavLink></li>
                    <li><NavLink to='/ipad' className='NavLink'>iPad</NavLink></li>
                    <li><NavLink to='/iphone' className='NavLink'>iPhone</NavLink></li>
                    <li><NavLink to='/watch' className='NavLink'>Watch</NavLink></li>
                    <li><NavLink to='/tv' className='NavLink'>TV</NavLink></li>
                    <li><NavLink to='/music' className='NavLink'>Music</NavLink></li>
                    <li><NavLink to='/support' className='NavLink'>Support</NavLink></li>
                    <li><i className="fas fa-search"></i></li>
                    <li><i className="fas fa-shopping-bag"></i></li>
                </ul>
            </nav>
        );
    }
}