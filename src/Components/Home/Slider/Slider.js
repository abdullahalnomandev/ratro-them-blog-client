import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
    return (
        <div className="container carosal">
            <h2 className="pb-3 text-secondary">Popular Post</h2>
            <Carousel>
                <div className="d-flex">
                    <img style={{ width: "400px" }} className="img-fluid image" src="https://news.cgtn.com/news/2020-07-01/Globe-amaranth-Brush-like-flower-that-is-essential-for-celebration-RLoXlyYd1K/img/c8cc07f90635494ab593f2fe1045a223/c8cc07f90635494ab593f2fe1045a223.jpeg" />

                    <div className=" p-4 text">
                        <h2>       <a href="#">I Finally Found One in Yoshi at Ocean Hair
                        </a>
                        </h2>
                        <p className="text-secondary">August 17,2018</p>

                        <p >The best hair salon experience I've ever had! I went to Ocean Hair after a terrible experience at another salon in hopes of somehow fixing my disaster of a haircut. I was able to make an appointment on the same day and Hiro saved the day!
                        </p>
                        <a className="text-center" href="#"> <u>Continue reading</u></a>
                    </div>
                </div>


                <div className="d-flex">
                    <img style={{ width: "400px" }} className="img-fluid" src="https://1.bp.blogspot.com/-S2G8enQVQ2A/XVf97fXZWlI/AAAAAAAANl4/j9aeFfRZuooJoLqOs3xUuMSAUvjVoJHmQCLcBGAs/s1600/portrait.jpg" />

                    <div className=" p-4 text">

                        <h2>       <a href="#">I Finally Found One in Yoshi at Ocean Hair
                        </a>
                        </h2>
                        <p className="text-secondary">August 17,2018</p>

                        <p className="text">The best hair salon experience I've ever had! I went to Ocean Hair after a terrible experience at another salon in hopes of somehow fixing my disaster of a haircut. I was able to make an appointment on the same day and Hiro saved the day!
                        </p>
                        <a className="text-center" href="#"> <u>Continue reading</u></a>
                    </div>

                </div>


                <div className="d-flex">
                    <img style={{ width: "400px" }} className="img-fluid" src="https://1.bp.blogspot.com/-COH994e9KOg/XVF21FK_ZHI/AAAAAAAANlE/Vi3IoFAhrLcNuPBvqsRQbUqjO67j-XvtQCLcBGAs/w480/bali-puraayu.jpg" />

                    <div className=" p-4 text">
                        <h2>       <a href="#">I Finally Found One in Yoshi at Ocean Hair
                        </a>
                        </h2>
                        <p className="text-secondary">August 17,2018</p>

                        <p >The best hair salon experience I've ever had! I went to Ocean Hair after a terrible experience at another salon in hopes of somehow fixing my disaster of a haircut. I was able to make an appointment on the same day and Hiro saved the day!
                        </p>
                        <a className="text-center" href="#"> <u>Continue reading</u></a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;