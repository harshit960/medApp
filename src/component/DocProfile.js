import React from 'react'
import CallSharpIcon from '@mui/icons-material/CallSharp';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
export default function docProfile() {
  return (
    <div>
      <div className="w-full h-96 relative bg-sky-500">
        <div className="w-full h-96 left-0 top-[70px] absolute bg-white rounded-tl-3xl rounded-tr-3xl" >
          <img className="w-full h-48 rounded-tl-3xl rounded-tr-3xl" src="https://via.placeholder.com/390x193" />
        </div>
        <div className="flex flex-row pt-2 justify-center">
          <ArrowBackIosNewOutlinedIcon className=" left-0 ml-3 absolute text-white text-bold"  />
          <div className="text-white text-2xl font-bold">Dr. Name fd</div>
        </div>
        <img className="w-28 h-36 left-[19px] top-[200px] absolute rounded-2xl shadow" src="https://via.placeholder.com/110x142" />
        <div className='absolute top-[280px] w-full flex justify-between'>
          <div className="pl-36">
            <div className="w-20  text-neutral-700 text-xl font-medium">Dr. Name</div>
            <div className="w-28  text-neutral-700 text-base font-normal">Specialization</div>
            <div className="w-28  text-neutral-700 text-base font-normal">abouttttttttt</div>
          </div>
          <div className="grid grid-cols-1 pr-2">
            <CallSharpIcon className="w-7 h-2" />
            <EmailIcon className="w-7 h-2" />
          </div>
        </div>
        <div className="w-full h-96  top-[410px] absolute">
          <div className="w-full pl-5 h-9  text-black text-xl font-medium">Book the available slot</div>
          
        </div>
        <div className="w-full h-14 bottom-0 mb-5 fixed flex justify-center">
          <div className="w-80 h-14 bg-sky-500 rounded-2xl text-white text-lg font-medium flex justify-center " >
            <div className='self-center'>Book Appointment</div>
          </div>
        </div>
      </div>
    </div>
  )
}
