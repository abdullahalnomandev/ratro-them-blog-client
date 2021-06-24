import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageBlog = () => {
    return (
        <div className="container-fluid" >
            <div className="row">
                <Sidebar />
            
                <div className="col-md-10">
                    <h1>Admin can manage blog</h1>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;