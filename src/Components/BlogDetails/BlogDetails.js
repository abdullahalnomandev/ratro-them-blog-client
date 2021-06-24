import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './BlogDetails.css'

const BlogDetails = () => {

    const { id } = useParams();

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <p className="text-secondary">Biyans Who . <span>July 27,20-19</span></p>
                <h1 >Hipster Cafes in Bandung You Need to Visit </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet iure qui sapiente libero. Quod officia voluptatem ea neque assumenda.</p>

                <div className="social-icon">

                    <a className="facebook" href="https://facebook.com">Share <FontAwesomeIcon icon={faFacebook} />
                        </a>

                    <a className="tweeter" href="https://facebook.com">Tweet <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    <a className="pinterest" href="https://facebook.com">Pinterest <FontAwesomeIcon icon={faPinterest} />
                        </a>


                </div>

                <div className="blog-details">
                    <img className="img-fluid w-50 my-5" src="https://1.bp.blogspot.com/-CWx5MNqZZ3c/XSscmSQM65I/AAAAAAAANes/VPcHo3HSI-8z04tx_NTUVnMX1fR8BmeewCPcBGAYYCw/s1600/photo-1523592121529-f6dde35f079e.jpeg" alt="" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat, mollitia rem recusandae alias ratione. Delectus quasi deserunt eum hic, expedita recusandae magni vel optio reprehenderit repellendus nulla, corporis nemo est provident reiciendis, quas ullam corrupti quae non animi modi! Omnis architecto ex recusandae dolor dolorum eaque alias earum consequuntur.</p>
                </div>
            </div>

        </>
    );
};

export default BlogDetails;