import Auto from '../assets/images/Auto.svg';
import '../assets/css/LandingPagePremiumSection.css';
import { Button } from './Button';
import { CustomCard } from './CustomCard';
import React from 'react';

export const LandingPagePremiumSection = () => {
    return (
        <div className="premium-section">
            <h3>Pick your Premium</h3>
            <p>Listen without limits on your phone, speaker, and other devices.</p>
            <img className='auto' src={Auto} alt="Auto Free Icon" />

            <div className='cards'>
                <CustomCard className="card1"
                    title="Mini"
                    price="From ₹7/day"
                    description="1 account on mobile only"
                    features={[
                        "Ad-free music listening on mobile",
                        "Group Session",
                        "Download 30 songs on 1 mobile device",
                    ]}
                />

                <CustomCard className="card2"
                    offer="1 month free"
                    title="Individual"
                    price="₹119/month after offer period"
                    description="1 account"
                    features={[
                        "Ad-free music listening",
                        "Group Session",
                        "Download 10k songs/device on 5 devices",
                    ]}
                    terms="1 month free not available for users who have already tried Premium."
                />

                <CustomCard
                    offer="1 month free"
                    title="Duo"
                    price="₹149/month after offer period"
                    description="2 accounts"
                    features={[
                        "For couples who live together",
                        "Ad-free music listening",
                        "Group Session",
                        "Download 10k songs/device on 5 devices per account"
                    ]}
                    terms="1 month free not available for users who have already tried Premium."
                />

                <CustomCard
                    offer="1 month free"
                    title="Family"
                    price="₹179/month after offer period"
                    description="Up to 6 accounts"
                    features={[
                        "For family who live together",
                        "Block explicit music",
                        "Ad-free music listening",
                        "Group Session",
                        "Download 10k songs/device on 5 devices"
                    ]}
                    terms="1 month free not available for users who have already tried Premium."
                />
            </div>

            <div className='special'>
                <p>Special discount for eligible students in university</p>
                <Button className="learn-button" link="/learn-more">LEARN MORE</Button>
            </div>
        </div>
    )
}