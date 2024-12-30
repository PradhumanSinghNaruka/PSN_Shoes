import React from 'react';

function Banner() {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
            <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
              <div className="space-y-10">
                <h1 className="text-5xl font-bold">Step Up Your Game with <br/>
                  <span className="text-violet-700">Step into  Comfort!!</span></h1>
            
                <p className="text-xl">
                  Discover the perfect blend of style and comfort with our collection of shoes. Each pair is crafted with precision, using high-quality materials to ensure durability and a perfect fit
                </p>
                <label className="input input-bordered flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                <input type="text" className="grow" placeholder="Email" />
                </label>
              </div>
              <div className="mt-8">
                <button className="btn btn-secondary bg-violet-700 hover:bg-black border-violet-700 hover:translate-x-2">Sign Up</button>
                
              
              </div>
              </div>
              <div className="order-1 w-full md:w-1/2 mt-20 md:mt-31 ">
            <img src='https://i.ebayimg.com/images/g/MnMAAOSw4UVgR8Vm/s-l1600.jpg'></img>
            </div>
            </div>
    </>
  )
}

export default Banner
