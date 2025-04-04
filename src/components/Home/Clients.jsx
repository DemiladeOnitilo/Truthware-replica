import React from 'react'

const Clients = () => {
  return (
    <div className='h-[80vh] text-white flex justify-center items-center'>
        <div className='flex flex-col justify-center text-left gap-y-10'>
            <div className='flex flex-col gap-y-5'>
                <p className='text-[#8a8a8a] text-lg'>SOME CLIENTS</p>
                <h1 className='text-5xl'>Working With the Best</h1>
            </div>
            <div className='grid grid-cols-3 grid-row-2 gap-6'>
                <div className='h-80 w-80 p-10 bg-[#110f0f]'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhulS29jeqsmQU70V7I83q7W5kmGphJTUlQ&s" alt="MTN logo" className='h-60 w-60' />
                </div>
                <div className='h-80 w-80 p-10 bg-[#110f0f]'>
                    <img src="https://cdn6.fonearena.com/varun/blog/airtel-new-logo.jpg" alt="Airtel logo" className='h-60 w-60'/>
                </div>
                <div className='h-80 w-80 p-10 bg-[#110f0f]'>
                    <img src="https://static-00.iconduck.com/assets.00/globacom-limited-icon-512x512-nsbqgsyf.png" alt="GLO logo" className='h-60 w-60'/>
                </div>
                <div className='h-80 w-80 p-10 bg-[#110f0f]'>
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/Atos-Logo.png" alt="Atos logo" className='h-60 w-60'/>
                </div>
                <div className='h-80 w-80 p-10 bg-[#110f0f]'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/640px-AXA_Logo.svg.png" alt="AXA logo" className='h-60 w-60'/>
                </div>
                <div className='h-80 w-80 p-10 bg-[#110f0f]'>
                    <img src="https://static.wixstatic.com/media/d8a860_a58a3d394f414482bb1578b16adb736a~mv2.jpg/v1/fill/w_279,h_140,al_c,lg_1,q_80,enc_avif,quality_auto/SIMARTIS%20LOGO.jpg" alt="Simartis logo" className='h-60 w-60'/>
                </div>
            </div>
            <div className='flex justify-center items-center'>
               <h1 className='text-5xl '>...and many more</h1> 
            </div>
            
        </div>
    </div>
  )
}

export default Clients