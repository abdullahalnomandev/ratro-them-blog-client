import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './AddBlog.css';


const AddBlog = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);




    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 formInfo">

                    <div >

                        <form className="mt-5 p-5 w-70" onSubmit={handleSubmit(onSubmit)}>

                            <label for="formFile" class="form-label">Upload a cover image</label> <br />
                            <input type="file" name="" id="" /><br /><br />


                            <label for="exampleFormControlInput1" class="form-label">Add blog Title</label><br />
                            <input className="form-control" {...register("title", { required: true })} /> 
                            {errors.title && <span className="err">Title field is required</span>} <br />


                            <label for="exampleFormControlTextarea1" class="form-label">Add  Blog Content</label>
                            <textarea className="form-control" cols="30" rows="10" {...register("content", { required: true })} /> 
                            {errors.content && <span className="err">Require to add blog content
                            </span>} <br />

                            <input type="submit" className=" blog-btn" />
                        
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;