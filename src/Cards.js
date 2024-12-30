import React from 'react';
import Buy1 from './Buy1';
import shoes1 from "./images/shoes1.png"
import shoes2 from "./images/shoes2.png"
import shoes3 from "./images/shoes3.png"

function Cards() {
  return (
    <>
        <h1 name="Men" className='mx-auto md:px-20 px-4 mt-12 md:mt-16 flex gap-20 text-black-700 text-4xl md:text-8xl items-center justify-center'>MEN  SHOES</h1>
    <div className="md:max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
        <div className="card-body text-center">
            <img src={shoes1} className="rounded-full w-[320px] h-[320px] mx-auto" alt="Nike Shoes"/>
            <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike</h2>
            <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">1PSN2004</span></h2>
            <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">510</span></h1>
            <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                Buy
            </a>
            <Buy1 />
        </div>
    </div>

    <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
        <div className="card-body text-center">
            <img src={shoes2} className="rounded-full w-[320px] h-[320px] mx-auto" alt="Puma Shoes"/>
            <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Puma</h2>
            <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">2PSN2004</span></h2>
            <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">499</span></h1>
            <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                Buy
            </a>
            <Buy1 />
        </div>
    </div>

    <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
        <div className="card-body text-center">
            <img src={shoes3} className="rounded-full w-[320px] h-[320px] mx-auto" alt="Nike Shoes"/>
            <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike</h2>
            <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">3PSN2004</span></h2>
            <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">550</span></h1>
            <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                Buy
            </a>
            <Buy1 />
        </div>
    </div>
</div>


    </>
  )
}

export default Cards
