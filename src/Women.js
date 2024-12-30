import React from 'react'
import Buy1 from './Buy1';
import shoes7 from "./images/premium1.png"
import shoes8 from "./images/premium2.png"
import shoes9 from "./images/premium3.png"

function Women() {
  return (
    <>
        <h1 name="Premium" className='mx-auto md:px-20 px-4 mt-12 md:mt-16 flex gap-20 text-black-700 text-4xl md:text-8xl items-center justify-center'>Men's Premium Shoes</h1>
        <div name="" className="container mx-auto px-4 md:px-20 bg-white mt-12 md:mt-32 max-w-screen-2xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes7} className="rounded-full w-[300px] h-[320px] mx-auto" alt="AIR Nike Brown"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike Air Jordan 1 Low Blue</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">7PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">2399</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes8} className="rounded-full w-[300px] h-[320px] mx-auto" alt="AIR Nike Blue"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike Air Jordan 1 Low Green</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">8PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">2399</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes9} className="rounded-full w-[300px] h-[320px] mx-auto" alt="AIR Nike Green"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike Air Jordan 1 Low Red</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">9PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">2399</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Women
