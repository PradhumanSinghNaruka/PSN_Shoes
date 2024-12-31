// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useLocation, useNavigate } from 'react-router-dom';

// function Buy1() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = async (data) => {
//     const userInfo = {
//         fullname: data.fullname,
//         number: data.number,
//         address: data.address,
//         code: data.code
//   };
//   await axios 
//     .post("/buy", userInfo)
//     .then((res)=>{
//       console.log(res.data);
//       if (res.data) {
//         toast.success("Successfully!! Make Payment");
//         setTimeout(() => {
          
//         },3000);
//         navigate(from, { replace: true });
//       }
//       localStorage.setItem("Contacts", JSON.stringify(res.data.user));
//     })
//     .catch((err) => {
//       if (err.response) {
//         console.log(err);
//         toast.error("Error: " + err.response.data.message);
//         setTimeout(() => {
          
//         },3000);
//       }
//     });
// };
//   return (
//     <div>
//       <dialog id="buy1" className="modal">
//             <div className="modal-box w-11/12 max-w-5xl">
//                 <h3 className="font-bold text-2xl text-violet-800">Enter Your Details</h3>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className='mt-6 space-y-2'>
//                         <span className="text-lg">Full Name</span>
//                         <br/>
//                         <input type="fullname"
//                         placeholder='Enter Your fullname' className='w-80 px-3 border rounded-md outline-none py-1'
//                         {...register("fullname", { required: true })}/> 
//                         <br/>
//                         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     <div className='mt-6 space-y-2'>
//                         <span className="text-lg">Phone Number</span>
//                         <br/>
//                         <input type="number"
//                         placeholder='Enter Your Phone Number' className='w-80 px-3 border rounded-md outline-none py-1'
//                         {...register("number", { required: true })}/>
//                         <br/>
//                         {errors.number && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     <div className='mt-6 space-y-2'>
//                         <span className="text-lg">Address</span>
//                         <br/>
//                         <input type="text"
//                         placeholder='Enter Your Address' className='w-80 px-3 border rounded-md outline-none py-1'
//                         {...register("address", { required: true })}/>
//                         <br/>
//                         {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     <div className='mt-6 space-y-2'>
//                         <span className="text-lg">Code</span>
//                         <br/>
//                         <input type="text"
//                         placeholder='Enter Shoes Code' className='w-80 px-3 border rounded-md outline-none py-1'
//                         {...register("code", { required: true })}/>
//                         <br/>
//                         {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     <button className='btn mt-10 ml-6 bg-violet-800 text-white hover:bg-white hover:text-violet-800 duration-300'>Submit</button>
//                 </form>
//                 <div className="modal-action">
//                     {/* <form method="dialog">
//                         <button className="btn hover:text-black hover:bg-violet-500 bg-black"> <Link to="/Payment" className='text-white'>Next</Link>{""}</button>
//                     </form> */}
//                     <Link to="/payment">
//                 <button type="button" className="btn hover:text-black hover:bg-violet-500 bg-black text-white">
//                   Next
//                 </button>
//               </Link>
//                 </div>
//             </div>
//         </dialog>
//     </div>
//   )
// }

// export default Buy1

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from 'react-router-dom';

function Buy1() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
        name: data.name,
        number: data.number,
        address: data.address,
        code: data.code,
        size: data.size
    }
    try{
      await axios.post("https://getform.io/f/awnnonrb", userInfo);
      alert("Submited, Make Payment !!");
    } catch (error){
      console.log(error);
      toast.error("Something Went Wrong")
    }
    
    // .post("/buy", userInfo)
    // .then((res) => {
    //   console.log(res.data);
    //   if (res.data) {
    //     toast.success("Successfully!! Make Payment");
    //     setTimeout(() => {
          
    //     }, 3000);
    //     navigate(from, { replace: true });
    //   }
    //   localStorage.setItem("Contacts", JSON.stringify(res.data.user));
    // })
    // .catch((err) => {
    //   if (err.response) {
    //     console.log(err);
    //     toast.error("Error: " + err.response.data.message);
    //     setTimeout(() => {
          
    //     }, 3000);
    //   }
    // });
  };

  return (
    <div>
      <dialog id="buy1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-2xl text-violet-800">Enter Your Details</h3>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            // action='https://getform.io/f/awnnonrb'
            // method="POST"
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
          >
            <div className='mt-6 space-y-2'>
              <span className="text-lg">Full Name</span>
              <br />
              <input type="text"
                placeholder='Enter Your fullname' 
                className='w-80 px-3 border rounded-md outline-none py-1'
                name='name'
                {...register("name", { required: true })} />
              <br />
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-6 space-y-2'>
              <span className="text-lg">Phone Number</span>
              <br />
              <input type="number"
                placeholder='Enter Your Phone Number' 
                className='w-80 px-3 border rounded-md outline-none py-1'
                name='number'
                {...register("number", { required: true })} />
              <br />
              {errors.number && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-6 space-y-2'>
              <span className="text-lg">Address</span>
              <br />
              <input type="text"
                placeholder='Enter Your Address' 
                className='w-80 px-3 border rounded-md outline-none py-1'
                name='address'
                {...register("address", { required: true })} />
              <br />
              {errors.address && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-6 space-y-2'>
              <span className="text-lg">Code</span>
              <br />
              <input type="text"
                placeholder='Enter Shoes Code' 
                className='w-80 px-3 border rounded-md outline-none py-1'
                name='code'
                {...register("code", { required: true })} />
              <br />
              {errors.code && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-6 space-y-2'>
              <span className="text-lg">Size</span>
              <br />
              <input type="number"
                placeholder='Enter Size Eg:5,6,7,8,9' 
                className='w-80 px-3 border rounded-md outline-none py-1'
                name='size'
                {...register("size", { required: true })} />
              <br />
              {errors.size && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <button type='submit' className='btn mt-10 ml-6 bg-violet-800 text-white hover:bg-white hover:text-violet-800 duration-300'>Submit</button>
          </form>
          <div className="modal-action">
            <Link to="/payment">
              <button type="button" className="btn hover:text-black hover:bg-violet-500 bg-black text-white">
                Next
              </button>
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Buy1;
