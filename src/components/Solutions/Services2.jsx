import React from 'react';
import CloudIcon from '../CloudIcon';
import CustomPersonIcon from '../CustomPersonIcon';
import StackIcon from '../StackIcon';
import SquaresIcon from '../SquaresIcon';

const ServicesSection = () => {
  return (
    <div className="h-auto w-screen flex justify-center text-white">
      <div className="w-[90%] flex flex-col">

        <div className="flex border border-gray-700 h-auto">
          <div className="w-[20%] flex justify-center items-center p-5 border-r border-gray-700">
            <div className="h-20 w-20 p-5 bg-[#889ce7] rounded-lg flex flex-col justify-center items-center text-center gap-3">
              <CloudIcon className='w-10 h-10' color='#000000' />
              <div className='w-full h-1  bg-black'></div>
            </div>
          </div>
          <div className="w-[80%] p-15">
            <div className='w-[40%] flex flex-col gap-y-2'>
               <h1 className="text-lg font-bold">
                    Mobile Sub-Services APIs
                </h1>
                <div className='text-sm text-[#8a8a8a] flex flex-col gap-y-7'>
                    <p>
                        A comprehensive suite of APIs and Enterprise solutions to enable Mobile Network and service providers enhance their Product 
                        Offerings and improve Mobile engagement with their customers. 
                    </p> 
                    <p>
                        Truthware’s solutions cut across multiple services including 
                        Mobile Gateways (SMS, USSD, IVR, Apps), Mobile Payments, Bank/Bulk SMS , ChatBots, Business Intelligence/Reporting and more.    
                    </p> 
                </div>
            </div>
          </div>
        </div>

        <div className="flex border border-gray-700">
          <div className="w-[20%] flex justify-center items-center p-5 border-r border-gray-700">
            <div className="h-20 w-20 p-5 bg-[#FD6262] rounded-lg flex flex-col justify-center items-center text-center gap-3">
              <StackIcon className='h-10 w-10 ' color='#000000' />
              <div className='w-full h-1  bg-black'></div>
            </div>
          </div>
          <div className="w-[80%] p-15">
            <div className='w-[40%] flex flex-col gap-y-2'>
                <h1 className="text-lg font-bold">             
                    Health Care
                </h1>
                <p className="text-sm text-[#8a8a8a]">
                    A suite of Electronic Health Records and Hospital Management software to help digitize hospitals and HMOs. With Truthware’s powerful 
                    digital platform, Health-Care Providers are able to gain great efficiency in Health Care Management and Financial Management in the Health-Care 
                    business. Truthware offers both In-House and Cloud-Based solutions for Health-Care Providers.
                </p>
            </div>
            
          </div>
        </div>
        
        <div className="flex border border-gray-700">
          <div className="w-[20%] flex justify-center items-center p-5 border-r border-gray-700">
            <div className="h-20 w-20 p-5 bg-[#889ce7] rounded-lg flex flex-col justify-center items-center text-center gap-3">
              <SquaresIcon className-='w-10 h-10'  color='#000000'/>
              <div className='w-full h-1  bg-black'></div>
            </div>
          </div>
          <div className="w-[80%] p-15">
            <div className='w-[40%] flex flex-col gap-y-2'>
                <h1 className="text-lg font-bold">
                    Enterprise Solutions
                </h1>
                <p className="text-sm text-[#8a8a8a]">
                     We provide consulting and implementation services to drive the digital transformation of organizations and develop customized software solutions to 
                    their specific needs. We also help large organizations manage their operations more efficiently and effectively.
                </p>
            </div>
            
          </div>
        </div>

        <div className="flex border border-gray-700">
          <div className="w-[20%] flex justify-center items-center p-5 border-r border-gray-700">
            <div className="h-20 w-20 p-5 bg-[#FD6262] rounded-lg flex flex-col justify-center items-center text-center gap-3">
              <CustomPersonIcon className='w-10 h-10' color='#000000' />
              <div className='w-full h-1  bg-black'></div>
            </div> 
          </div>
          <div className="w-[80%] p-15">
            <div className='w-[40%] flex flex-col gap-y-2'> 
                <h1 className="text-lg font-bold">
                    Mobile Financial Services
                </h1>
                <p className="text-sm text-[#8a8a8a]">
                    Mobile Financial Services (MFS) is borne out of the convergence of lifestyle services to mobile phones. Truthware's robust MFS solutions help companies
                    democratize their services to millions of Africans previous unable to access financial services.  Our dynamic user-journies always ensure are clients 
                    are one-step ahead of the competition.
                </p>
            </div>

          </div>
        </div>


        <div className="flex border border-gray-700 h-90">
          <div className="w-[40%] relative border-r border-gray-700 flex justify-center items-center text-center">
            <div className='absolute inset-0 opacity-30 bg-[url(https://img.freepik.com/free-photo/3d-render-modern-techno-with-flowing-particles-design_1048-13727.jpg?t=st=1743628335~exp=1743631935~hmac=216a176575cf34d6289180662e1f8894030ef5a61d1dfc2b97114c2a29a6a662&w=826)]
           bg-no-repeat bg-cover'></div>
            <h1 className='text-2xl w-[40%]'>We Integrate With Your Ecosystem</h1>
          </div>
          <div className="w-[60%] p-5 flex items-center justify-center">
            <div className='w-[40%]'>
                <p className="text-sm text-[#8a8a8a]">
                    We are experts in connecting different systems or software applications to create a more
                    comprehensive and interconnected environment. This can involve connecting various internal
                    systems within an organization or integrating with external systems such as those of
                    partners, customers, or suppliers.
                </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
