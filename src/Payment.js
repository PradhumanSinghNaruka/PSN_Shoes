// import React from 'react'
// import qr1 from './images/qr.png'

// function Payment() {
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
//       <h1 className="max-w-5xl md:mt-22 ml-4 md:ml-96 ml-4 text-6xl text-violet-800">Payment Threw</h1>
//         <div className="max-w-5xl md:mt-28 ml-4 md:ml-48">
//             <div className="flex mt-8">
//             <p className="text-4xl mt-8 text-violet-900 font-semibold">Phone pe</p>
//             <img src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/phonepe-1686727535.jpg' className='w-[150px] h-[100px]' alt=''/>
//             </div>
//             <div className="flex space-x-12">
//             <p className="text-4xl mt-8 text-violet-900 font-semibold">Paytm</p>
//             <img src='https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo-2048x1152.png' className='w-[150px] h-[100px]' alt=''/>
//             </div>
//             <div className="flex space-x-8">
//             <p className="text-4xl mt-8 text-violet-900 font-semibold">Google Pay</p>
//             <img src='https://static.vecteezy.com/system/resources/previews/017/221/853/original/google-pay-logo-transparent-free-png.png' className='w-[130px] h-[100px]' alt=''/>
//             </div>
//             <div className="flex">
//               <img src={qr1} className='' alt=''/>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Payment

import React from 'react';
import qr1 from './images/qr.png';

function Payment() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <h1 className="max-w-5xl md:mt-22 ml-4 text-6xl text-violet-800">Payment Threw</h1>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl ml-4">
        <div className="space-y-8 hidden md:flex flex-col">
          <div className="flex items-center space-x-4">
            <p className="text-4xl text-violet-900 font-semibold">Phone pe</p>
            <img src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/phonepe-1686727535.jpg' className='w-[150px] h-[100px]' alt='Phone pe logo'/>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-4xl text-violet-900 font-semibold">Paytm</p>
            <img src='https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo-2048x1152.png' className='w-[150px] h-[100px]' alt='Paytm logo'/>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-4xl text-violet-900 font-semibold">Google Pay</p>
            <img src='https://static.vecteezy.com/system/resources/previews/017/221/853/original/google-pay-logo-transparent-free-png.png' className='w-[130px] h-[100px]' alt='Google Pay logo'/>
          </div>
        </div>
        <div className="flex items-center">
          <img src={qr1} className='w-[300px] h-[600px]' alt='QR Code'/>
        </div>
      </div>
    </div>
  );
}

export default Payment;
