import React from 'react'

const Video = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
            {/* <div className='order-2 relative w-full h-screen md:w-1/2 md:h-screen overflow-hidden'>
                <iframe className='absolute top-0 left-0 w-full h-full border-0'  src='https://player.vimeo.com/video/974359523?badge=0&autopause=0&autoplay=1&loop=1&player_id=0&app_id=58479&background=1&muted=1' allow="autoplay; fullscreen">
                </iframe>
                <div className='order-1 absolute top-0 right-0 w-full md:w-1/2 h-screen p-4 flex items-start justify-end'>
                  <div className='mt-20 md:mt-31 text-right'>
                    <h2>Embark on a therapeutic & recovery journey towards relief:</h2>
                  </div>
                </div>
            </div> */}
            <div className='relative w-full h-screen md:w-1/2 md:h-screen overflow-hidden mt-32'>
              <iframe className='absolute top-0 left-0 w-full h-full border-0 mt-10'  src='https://player.vimeo.com/video/974359523?badge=0&autopause=0&autoplay=1&loop=1&player_id=0&app_id=58479&background=1&muted=1' allow="autoplay; fullscreen">
              </iframe>
            </div>
            <div className='w-full md:w-1/2 mt-32'>
              <h2 className='text-4xl mt-10'>Embark on a therapeutic & recovery journey towards relief:</h2>
              <button className='mt-12 border-2 border-gray-800 bg-gray-800 text-white h-14 w-80 rounded-md hover:bg-white hover:text-gray-800 duration-300'> PSN-SHOES® Technology</button>
              <div className='mt-12 flex items-center'>
                <img src='https://www.gravitydefyer.com/images/sca_2024_v2/Homepage-3/Desktop/050324_Align_D.webp'></img>   
                <h2 className='flex items-center ml-10 text-xl'> Alignment of your Body </h2>  
                <h1 className="ml-6 text-xl text-bold"> ↓</h1>  
              </div>
              <div className='mt-12 flex items-center'>
                <img src='https://www.gravitydefyer.com/images/sca_2024_v2/Homepage-3/Desktop/050324_Gait_D.webp'></img>   
                <h2 className='flex items-center ml-10 text-xl'> Alignment of your Body </h2>  
                <h1 className="ml-6 text-xl text-bold"> ↓</h1>  
              </div>
            </div>
        </div>
    </>
  )
}

export default Video
