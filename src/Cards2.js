import React from 'react'
import Buy1 from './Buy1';
import shoes4 from "./images/shoes41.png"
import shoes5 from "./images/shoes5.png"
import shoes6 from "./images/shoes6.png"

function Cards2() {
  return (
    <>
        {/* <div className="container mx-auto px-4 bg-white mt-32 max-w-screen-2xl md:px-20 flex-col md:flex-row">
            <div className="flex space-x-8">
            <div className="card card-compact bg-gray-100 w-96 shadow-xl">
  
                <div className="card-body">
                    <img src={shoes4} className="rounded-full w-[320px] h-[320px]" alt=""/>
                    <h2 className="card-title font-bold text-4xl ml-8">AIR Nike Brown</h2>
                    <h2 className="card-title text-2xl ml-16">Code :<span className="text-4xl font-semibold">4PSN2004</span></h2>
                    <h1 className="text-2xl ml-24 mb-0 mt-4">Price : <span className="font-bold">650</span></h1>
                    <a className="btn btn-primary mt-4 text-2xl"
                onClick={()=>document.getElementById("buy1").showModal()}>
                Buy</a>
                <Buy1 />
                </div>
            </div>
            <div className="card card-compact bg-gray-100 w-96 shadow-xl">
  
            <div className="card-body">
                    <img src={shoes5} className="rounded-full w-[320px] h-[320px]" alt=""/>
                    <h2 className="card-title font-bold text-4xl ml-8">AIR Nike Blue</h2>
                    <h2 className="card-title text-2xl ml-16">Code :<span className="text-4xl font-semibold">5PSN2004</span></h2>
                    <h1 className="text-2xl ml-24 mb-0 mt-4">Price : <span className="font-bold">650</span></h1>
                    <a className="btn btn-primary mt-4 text-2xl"
                onClick={()=>document.getElementById("buy1").showModal()}>
                Buy</a>
                <Buy1 />
                </div>
            </div>
            <div className="card card-compact bg-gray-100 w-96 shadow-xl">
  
            <div className="card-body">
                    <img src={shoes6} className="rounded-full w-[320px] h-[320px]" alt=""/>
                    <h2 className="card-title font-bold text-4xl ml-8">AIR Nike Green</h2>
                    <h2 className="card-title text-2xl ml-16">Code :<span className="text-4xl font-semibold">6PSN2004</span></h2>
                    <h1 className="text-2xl ml-24 mb-0 mt-4">Price : <span className="font-bold">699</span></h1>
                    <a className="btn btn-primary mt-4 text-2xl"
                onClick={()=>document.getElementById("buy1").showModal()}>
                Buy</a>
                <Buy1 />
                </div>
            </div>
        </div>
    </div> */}

<div className="container mx-auto px-4 md:px-20 bg-white mt-32 max-w-screen-2xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes4} className="rounded-full w-[320px] h-[320px] mx-auto" alt="AIR Nike Brown"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">AIR Nike Brown</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">4PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">650</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes5} className="rounded-full w-[320px] h-[320px] mx-auto" alt="AIR Nike Blue"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">AIR Nike Blue</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">5PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">650</span></h1>
                <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
                    Buy
                </a>
                <Buy1 />
            </div>
        </div>
        <div className="card card-compact bg-gray-100 w-full md:w-96 shadow-xl">
            <div className="card-body text-center">
                <img src={shoes6} className="rounded-full w-[320px] h-[320px] mx-auto" alt="AIR Nike Green"/>
                <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">AIR Nike Green</h2>
                <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">6PSN2004</span></h2>
                <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">699</span></h1>
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

export default Cards2
