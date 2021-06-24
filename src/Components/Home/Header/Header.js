import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <section >
            <div className="hederInfo">
            </div>
            <div className="container">

                <div s className="row mb-5 margin p-5">
                    <div className="col-md-5 text-primary">
                        <h3> <a href="#">One of the Top Temples in Bali, a Serene Place of Enveloping Calm</a> </h3>
                        <p>August 12,2017</p>
                    </div>
                    <div className="col-md-7 text-white">
                        <p>Pura Taman Ayun is a compound of Balinese temple and garden with water features located in Mengwi subdistrict in Badung Regency, Bali, Indonesia. Henk Schulte Nordholt wrote in his book Negara Mengwi that Taman Ayun was renovated in 1750. The architect’s name is given as Hobin …</p>
                        <a href="#">Contunue reading</a>

                    </div>
                </div>

            </div>


        </section>
    );
};

export default Header;