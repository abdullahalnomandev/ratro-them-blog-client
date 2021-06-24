
import React from 'react';
import { Link } from 'react-router-dom';

const RecentPost = () => {

    const blogData = [
        {
            id: 1,
            title: "I Finally Found One in Yoshi at Ocean Hair",
            date: "August 17,2018",
            description: "Located some 4 hours drive from Surabaya, the capital of East Java, Mount Bromo is a part of the Bromo Tengger Semeru National P…",
            image: "https://1.bp.blogspot.com/-CWx5MNqZZ3c/XSscmSQM65I/AAAAAAAANes/VPcHo3HSI-8z04tx_NTUVnMX1fR8BmeewCPcBGAYYCw/s1600/photo-1523592121529-f6dde35f079e.jpeg",

        },
        {
            id: 2,
            title: "Biyans Who",
            date: "August 17,2018",
            description: "I'm a front-end developer, UI/UX designer. In my free time, I chase my dog all over the house and collect dust from my window sill.",
            image: "https://3.bp.blogspot.com/-i4FVYKM8wEs/X10H2v41twI/AAAAAAAAOA8/gST-JvH0jscRVZT_i9e_4P-cWZWlVRdHACK4BGAYYCw/w380-h380-p-k-no-nu/ava.jpg"
        },
        {
            id: 3,
            title: "I Finally Found One in Yoshi at Ocean Hair",
            date: "August 17,2018",
            description: "Located some 4 hours drive from Surabaya, the capital of East Java, Mount Bromo is a part of the Bromo Tengger Semeru National P…",
            image: "https://1.bp.blogspot.com/-CWx5MNqZZ3c/XSscmSQM65I/AAAAAAAANes/VPcHo3HSI-8z04tx_NTUVnMX1fR8BmeewCPcBGAYYCw/s1600/photo-1523592121529-f6dde35f079e.jpeg",

        },
        {
            id: 4,
            title: "Biyans Who",
            date: "August 17,2018",
            description: "I'm a front-end developer, UI/UX designer. In my free time, I chase my dog all over the house and collect dust from my window sill.",
            image: "https://3.bp.blogspot.com/-i4FVYKM8wEs/X10H2v41twI/AAAAAAAAOA8/gST-JvH0jscRVZT_i9e_4P-cWZWlVRdHACK4BGAYYCw/w380-h380-p-k-no-nu/ava.jpg"
        }
    ];


    return (
        <div className="container mb-5">

            <h2 className="text-secondary ">Recent Post</h2>
            <div className="row">
                <div className="col-sm-10">

                    <div className="row">

                        <div className=" col-sm-6">
                            <img className="img-fluid" src={blogData[0].image} alt="" />
                        </div>

                        <div style={{ float: 'left' }} className="col-sm-6 mb-4">


                            <Link to={`/details/${blogData[0].id}`}>
                                <h2>  {blogData[0].title}   </h2>
                            </Link>
                            <p className="text-secondary"> {blogData[0].date} *<span> 1 Comment</span></p>

                            <p className="text"> {blogData[0].description} </p>

                            <Link to={`/details/${blogData[0].id}`}> Continue reading</Link>
                        </div>
                    </div>

                </div>
                <div className="col-sm-2 mb-4">
                    <img style={{ width: '100px' }} className="img-fluid" src={blogData.image} alt="" />
            
                    
                    <Link to={`/details/${blogData[1].id}`}>
                                <h6>  {blogData[1].title}   </h6>
                            </Link>
                    <p className="text-secondary">{blogData[1].date}</p>
                    <p className="text">{blogData[1].description} </p>
                    <Link to={`/details/${blogData[1].id}`}> Continue reading</Link>
                </div>
            </div>





            <div className="row">
                <div className="col-sm-10">

                    <div className="row">

                        <div className=" col-sm-6">
                            <img className="img-fluid" src={blogData[2].image} alt="" />
                        </div>
                        <div style={{ float: 'left' }} className="col-sm-6 mb-4">


                        <Link to={`/details/${blogData[2].id}`}>
                                <h2>  {blogData[2].title}   </h2>
                            </Link>

                            <p className="text-secondary">{blogData[2].date} * <span> 1 Comment</span></p>

                            <p className="text">{blogData[2].description}
                            </p>
                            <a className="text-center mb-4" href="/details"> <u>Continue reading</u></a>
                        </div>
                    </div>

                </div>
                <div className="col-sm-2 mb-4">
                    <img style={{ width: '100px' }} className="img-fluid" src={blogData[3].image} alt="" />
                    <h6>      <a href="/details">{blogData[3].title}
                    </a>
                    </h6>
                    <p className="text-secondary">{blogData[3].date}</p>

                    <p className="text">{blogData[3].description}
                    </p>
                    <a className="text-center " href="/details"> <u>Continue reading</u></a>
                </div>
            </div>

        </div>
    );
};

export default RecentPost;