import React from 'react';
import { Button } from './Button';
import Check from '../assets/images/check.svg';
import '../assets/css/CustomCard.css';

export const CustomCard = ({ className, offer, title, price, description, terms, features }) => {
    let titleClassName = '';

    if (className === 'card1') {
        titleClassName = 'special-desc';
    }

    return (
        <div className='card'>
            <div>
                <div className='offer-container'>
                    {offer && <p className='offer'>{offer}</p>}
                    <p className='tag'>One-time plans available</p>
                    <p className='title'>{title}</p>
                    <p className='price'>{price}</p>
                    <p className={`desc ${titleClassName}`}>{description}</p>
                </div>

                <div className='features'>
                    {features.map((feature, index) => (
                        <p className='feature' key={index}>
                            <img src={Check} alt="Check Free Icon" />
                            <p className='texts'>{feature}</p>
                        </p>
                    ))}
                    {className === 'card1' && (
                        <React.Fragment>
                            <br />
                            <br />
                            <br />
                            <br />
                        </React.Fragment>
                    )}
                    {className === 'card2' && (
                        <React.Fragment>
                            <br />
                            <br />
                            <br />
                        </React.Fragment>
                    )}
                    <Button link="#/plans">VIEW PLANS</Button>
                </div>
            </div>
            <p className='terms'><u>Terms and conditions apply.</u> {terms}</p>
        </div>
    );
};
