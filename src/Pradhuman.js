import React from 'react';
import { useForm } from "react-hook-form";
import Psn from "../src/images/psn.png"

function Pradhuman() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div>
        <dialog id="my_modal_2" className="modal">
  <div className="modal-box w-2xl">
    <h1 className="font-bold text-2xl">Hello Everyone !!</h1>
    <img className='mt-6'  src={Psn}></img>
    <p className="text-2xl mt-10">Pradhuman Singh Naruka</p>
    <p className="text-2xl mt-6">BTech 3rd Year Student</p>
    <p className="text-2xl mt-6">Passionate Web Developer</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default Pradhuman
