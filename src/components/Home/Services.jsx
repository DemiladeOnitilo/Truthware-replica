import React from 'react'
import ServiceCard from './ServiceCard'
import CloudIcon from '../CloudIcon'
import StackIcon from '../StackIcon'
import SquaresIcon from '../SquaresIcon'
import CustomPersonIcon from '../CustomPersonIcon'


const Services = () => {
  return (
    <div className="flex justify-center items-center w-full -translate-y-55">
      <div className="relative flex justify-center bg-[#110f0f] items-center w-[95%] h-[90vh]">
        <div className="text-left 
          bg-[url(https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-176695.jpg?t=st=1743512506~exp=1743516106~hmac=60e990a5e8d71cd703f040941979afa7b1899290da7ec9660e462ef6c871ed38&w=740)]
          bg-cover bg-no-repeat bg-top w-[40%] h-full border border-gray-500 p-45">
          <div className="w-full">
            <h2 className="text-white text-4xl mb-4">
              Build solutions and use-cases to enhance customer experience
            </h2>
            <p className="text-gray-300">Several offerings across many industries.</p>
          </div>
        </div>

        <div className="flex justify-center items-center w-[60%] h-full border border-gray-500 p-5">
          <div className="grid grid-cols-2 gap-y-20 w-[50%] relative -translate-y-25">
            <div className="relative -translate-y-25"> 
                <ServiceCard 
                    icon={<CloudIcon />}
                    name="Telecommunications"
                    content="Unified APIs for mobile access to deploy hundreds of customized solutions."
                /> 
            </div>
            <div> 
                <ServiceCard 
                    icon={<StackIcon />}
                    name="Financial Services"
                    content="Create new and innovative mobile financial services experience for your customers."
                /> 
            </div>
            <div className="relative -translate-y-25"> 
                <ServiceCard 
                    icon={<SquaresIcon />}
                    name="Health-Care"
                    content="Leading Electronic Medical Records and Health insurance platforms."
                /> 
            </div>
            <div>
                <ServiceCard 
                    icon={<CustomPersonIcon />}
                    name="Mobile Security"
                    content="World-class suite of mobile ID protection services to secure digital transactions."
                /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
