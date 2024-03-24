import '../assets/css/LandingPagePowerSection.css';
import AdFree from '../assets/images/ad-free.svg';
import OffLine from '../assets/images/offline.svg';
import Play from '../assets/images/play.svg';
import Pay from '../assets/images/pay.svg';


export const LandingPagePowerSection = () => {
    return (
        <div className="power-section">
            <h3>The power of Premium</h3>
            <div className='power-frame'>
                <div className='frame'>
                    <img src={AdFree} alt="Ad Free Icon" />
                    <div>
                        <h5>Ad-free music listening</h5>
                        <p>Enjoy uninterrupted music.</p>
                    </div>
                </div>
                <div className='frame'>
                    <img src={OffLine} alt="Offline Icon" />
                    <div>
                        <h5>Offline playback</h5>
                        <p>Save your data by listening offline.</p>
                    </div>
                </div>
                <div className='frame'>
                    <img src={Play} alt="Play Icon" />
                    <div>
                        <h5>Play everywhere</h5>
                        <p>Listen to your speakers, TV, and other favorites devices.</p>
                    </div>
                </div>
                <div className='frame'>
                    <img src={Pay} alt="Payment Icon" />
                    <div>
                        <h5>Pay your way</h5>
                        <p>Prepay with paytm, UPI and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}