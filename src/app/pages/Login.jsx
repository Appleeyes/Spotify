import '../assets/css/Login.css';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import FB from '../assets/images/FB.svg';
import IOS from '../assets/images/IOS.svg';
import GOOGLE from '../assets/images/google.svg';
import Eye from '../assets/images/eye.svg';
import Mark from '../assets/images/mark.svg';

export const Login = () => {
    return (
        <div className="login">
            <div className="logo-container">
                <div className="logo">
                    < Logo useWhite={false} />
                </div>
            </div>
            <div className='buttons'>
                <Button className="fb-button" link="/fb"><img src={FB} alt="FB Free Icon" /><span>CONTINUE WITH FACEBOOK</span></Button>
                <Button className="ios-button" link="/ios"><img src={IOS} alt="IOS Free Icon" /><span>CONTINUE WITH APPLE</span></Button>
                <Button className="google-button" link="/google"><img src={GOOGLE} alt="GOOGLE Free Icon" /><span>CONTINUE WITH GOOGLE</span></Button>
            </div>
            <div className='line'>
                <hr /> <span>OR</span> <hr />
            </div>

            <form action="#">
                <div>
                    <label htmlFor="email">Email address or username</label>
                    <input type="text" placeholder='Email address or username' />
                </div>
                <div className='input'>
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder='Password' style={{ backgroundImage: `url(${Eye})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', paddingLeft: '10px' }} />
                </div>
                <a href="/">Forgot your password?</a>
                <div className='forget-container'>
                    <div className='forget'>
                        <img src={Mark} alt="Mark Free Icon" />
                        <span>Remember me</span>
                    </div>
                    <Button className="login-button" link="/login">LOG IN</Button>
                </div>
            </form>
            <div className='bottom'>
                <h5>Don't have an account?</h5>
                <Button className="sigup-button" link="/login">SIGN UP FOR SPOTIFY</Button>
            </div>
        </div>
    )
}