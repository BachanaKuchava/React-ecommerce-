import react from 'react';
import './upperHeader.scss';

import locationIcon from '../../../assets/icons/locationicon.svg';
import trackIcon from '../../../assets/icons/iconoir_delivery-truck.svg';
import offerIcon from '../../../assets/icons/Discount.svg';

function UpperHeader() {
    return (
        <>
      
            <div className="upper">
                <p>Welcome to worldwide Megamart!</p>
                <div className="upper-right-block">
                    <p className="location-info upper-right-block-item">
                        <img src={locationIcon} className="icon" alt="location" />
                        Deliver to 423651  
                    </p>
                    <p> | </p>
                    <p className="track-info upper-right-block-item">
                        <img src={trackIcon} className="icon" alt="track" />
                        Track your order 
                    </p>
                    <p> | </p>
                    <p className="offer-info upper-right-block-item">
                        <img src={offerIcon} className="icon" alt="offer" />
                        All Offers
                    </p>
                </div>
            </div>
        
        </>
    )
} export default UpperHeader;