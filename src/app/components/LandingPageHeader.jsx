import React from 'react';
import '../assets/css/LandingPageHeader.css';
import { Logo } from './Logo';
import { Link } from 'react-router-dom'

export const LandingPageHeader = () => {
    return (
    <header className="header">
        <div className="logo">
            < Logo useWhite={true}/>
        </div>
        <div className="menu">
            <ul>
                <li>
                    <a href="#/premium">Premium</a>
                </li>
                <li>
                    <a href="#/support">Support</a>
                </li>
                <li>
                    <a href="#/download">Download</a>
                </li>
                <li>|</li>
                <li className='active'>
                    <a href="#/sign-up">Sign up</a>
                </li>
                <li className='active'>
                        <Link to="/Login"> Log In </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}