import '../assets/css/Footer.css';
import {Logo} from './Logo';
import Instagram from '../assets/images/instagram.svg';
import Twitter from '../assets/images/twitter.svg';
import Facebook from '../assets/images/facebook.svg';
import Vector from '../assets/images/Vector.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='up'>
                <div className='links'>
                    <div className="logo">
                        < Logo useWhite={true} />
                    </div>

                    <div>
                        <ul className='no-head'>
                            <li><a href="#/about">About</a></li>
                            <li><a href="#/jobs">Jobs</a></li>
                            <li><a href="#/record">For the Record</a></li>
                        </ul>
                    </div>

                    <div> 
                        <ul>
                           <h5>COMMUNITIES</h5>
                            <li><a href="#/artists">For Artists</a></li>
                            <li><a href="#/dev">Developers</a></li>
                            <li><a href="#/advert">Advertising</a></li>
                            <li><a href="#/investors">Investors</a></li>
                            <li><a href="#/vendors">Vendors</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h5>USEFUL LINKS</h5>
                            <li><a href="#/support">Support</a></li>
                            <li><a href="#/web">Web Player</a></li>
                            <li><a href="#/mobile">Free Mobile App</a></li>
                        </ul>
                    </div>
                </div>
                <div className='socials'>
                    <img src={Instagram} alt="Instagram Icon" />
                    <img src={Twitter} alt="Twitter Icon" />
                    <img src={Facebook} alt="Facebook Icon" />
                </div>
            </div>
            <div className='down'>
                <div>
                    <ul>
                        <li><a href="#/privacy">Privacy Center</a></li>
                        <li><a href="#/policy">Privacy Policy</a></li>
                        <li><a href="#/cookies">Cookies</a></li>
                        <li><a href="#/about">About Ads</a></li>
                    </ul>
                </div>
                <div className='left'>
                    <p><img src={Vector} alt="Vector Icon" /> India (English)</p>
                    <p>© 2023 Spotify AB</p>
                </div>
            </div>
        </footer>
    )
}