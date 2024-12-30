import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            number: data.number,
            address: data.address,
            code: data.code
        }
        try{
          await axios.post("https://getform.io/f/awnnonrb", userInfo);
          toast.success("Submited ");
        } catch (error){
          console.log(error);
          toast.error("Something Went Wrong")
        }
        
      // const onSubmit = async (data) => {
      //   const userInfo = {
      //       fullname: data.fullname,
      //       email: data.email,
      //       number: data.number,
      // };
      // await axios.post("/contact", userInfo)
      // .then((res) => {
      //   console.log(res.data);
      //   if (res.data) {
      //     toast.success("Submit Successfully");
      //     window.location.reload();
      //     setTimeout(() => {
            
      //     },3000);
      //     navigate(from, { replace: true });
      //   }
      //   localStorage.setItem("Contacts", JSON.stringify(res.data.user));
      // })
      // .catch((err) => {
      //   if (err.response) {
      //     console.log(err);
      //     toast.error("Error: " + err.response.data.message);
      //     setTimeout(() => {
            
      //     },3000);
      //     window.location.reload();
          
      //   }
      // });
};
  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
            <div className="max-w-5xl md:mt-24 ml-4 md:ml-96">
                <h3 className="font-semibold mt-8 md:mt-12 text-4xl md:text-6xl text-black">Contact Form</h3>
                <form 
                  onSubmit={handleSubmit(onSubmit)}
                  // action='https://getform.io/f/awnnonrb'
                  // method="POST"
                  className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
                >
                <div className=' space-y-2 mt-14'>
                        <span className="text-xl text-violet-800">Name</span>
                        <br/>
                        <input type="fullname"
                        placeholder='Enter Your Full Name' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("fullname", { required: true })}/>
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span className="text-xl text-violet-800">Phone Number</span>
                        <br/>
                        <input type="number"
                        placeholder='Enter Your Phone Number' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("number", { required: true })}/>
                        <br/>
                        {errors.number && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span className="text-xl text-violet-800">Email</span>
                        <br/>
                        <input type="email"
                        placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1'
                        {...register("email", { required: true })}/>
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <p className='text-md mt-10 text-violet-800'>My Contact Number is: <span className='underline text-red-700' >810******6</span></p>
                    <button className='btn mt-10 ml-6 bg-violet-800 text-white hover:bg-white hover:text-violet-800 duration-300'>Submit</button>
                
                </form>
            </div>

    </div>
  )
}

export default Contact
