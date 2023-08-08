import React from 'react'

export default function docProfile() {
  return (
    <div>
      <div className="w-96 h-96 relative bg-sky-500">
        <div className="w-96 h-96 left-0 top-[70px] absolute bg-white rounded-tl-3xl rounded-tr-3xl" />
        <img className="w-96 h-48 left-0 top-[63px] absolute rounded-tl-3xl rounded-tr-3xl" src="https://via.placeholder.com/390x193" />
        <div className="flex flex-row">
          <img className="w-9 h-9 left-0 top-0 absolute" src="https://via.placeholder.com/38x38" />
          <div className=" absolute text-white text-2xl font-bold">Dr. Name fd</div>
        </div>
        <div className="w-28 h-12 left-[151px] top-[274px] absolute">
          <div className="w-20 h-2.5 left-0 top-0 absolute text-neutral-700 text-xl font-medium">Dr. Name</div>
          <div className="w-28 h-2 left-0 top-[25.61px] absolute text-neutral-700 text-base font-normal">Specialization</div>
          <div className="w-28 h-2 left-0 top-[41.61px] absolute text-neutral-700 text-base font-normal">abouttttttttt</div>
        </div>
        <img className="w-28 h-36 left-[19px] top-[200px] absolute rounded-2xl shadow" src="https://via.placeholder.com/110x142" />
        <img className="w-7 h-7 left-[329px] top-[263px] absolute shadow" src="https://via.placeholder.com/30x30" />
        <img className="w-7 h-7 left-[335px] top-[300px] absolute shadow" src="https://via.placeholder.com/30x30" />
        <div className="w-96 h-96 left-[-52px] top-[360px] absolute">
          <div className="w-64 h-9 left-[71px] top-[87px] absolute text-black text-xl font-medium">Book the available slot</div>
          <div className="w-96 h-96 px-16 pt-32 pb-28 left-0 top-0 absolute flex-col justify-end items-center inline-flex">
            <div className="w-96 h-64 relative">
            </div>
          </div>
        </div>
        <div className="w-80 h-14 left-[39px] top-[762px] absolute">
          <div className="w-80 h-14 left-0 top-0 absolute bg-sky-500 rounded-2xl" />
          <div className="left-[77px] top-[19px] absolute text-white text-lg font-medium">Book Appointment</div>
        </div>
      </div>
    </div>
  )
}
