import '../assets/css/LandingPageHero.css';
import { Button } from './Button';

export const LandingPageHero = () => {
    return (
        <div className="hero-section">
            <h3>Get Premium free for 1 month</h3>
            <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div className='buttons'>
                <Button className="button1" link="/get-started">GET STARTED</Button>
                <Button className="button2" link="/other-plans">SEE OTHER PLANS</Button>
            </div>
            <small><span>Terms and conditions apply</span>. 1 month free not available for users who have already tried Premium.</small>
        </div>
    )
}