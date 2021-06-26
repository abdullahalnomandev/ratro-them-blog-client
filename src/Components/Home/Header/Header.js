import Aos from 'aos';
import React from 'react';
import './Header.css';

const Header = () => {

    Aos.init();
    return (
        <section >
            <div className="hederInfo">
            </div>
            <div className="container">
                <div s className="row mb-5 margin p-5" data-aos-duration="1000"
                    data-aos="zoom-in">
                    <div className="col-md-5 ">
                        <h3 style={{ color: "white" }} >One of the Top Temples in Bali, a Serene Place of Enveloping Calm </h3>
                        <p>August 12,2017</p>
                    </div>
                    <div className="col-md-7 text-white">
                        <p style={{ color: 'black' }}>Pura Taman Ayun is a compound of Balinese temple and garden with water features located in Mengwi subdistrict in Badung Regency, Bali, Indonesia. Henk Schulte Nordholt wrote in his book Negara Mengwi that Taman Ayun was renovated in 1750. The architect’s name is given as Hobin …</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Header;