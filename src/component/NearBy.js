import React from 'react'

export default function () {
  return (
    <div>
      <div className="w-96 h-96 relative bg-white">
        <div className="w-96 h-96 left-0 top-0 absolute bg-sky-500" />
        <div className="w-96 h-96 left-[1px] top-[371px] absolute bg-white rounded-tl-3xl rounded-tr-3xl" />
        <div className="w-64 h-14 left-[21px] top-[392px] absolute">
          <div className="w-64 h-10 left-0 top-0 absolute text-black text-2xl font-semibold">Doctors near you...</div>
          <div className="w-32 h-6 left-[2px] top-[32px] absolute">
            <div className="w-20 h-6 left-0 top-0 absolute bg-gray-200 rounded-3xl" />
            <div className="w-28 h-5 left-[10px] top-[5.06px] absolute opacity-80 text-black text-xs font-semibold">Filter</div>
            <img className="w-5 h-4 left-[50px] top-[5.06px] absolute" src="https://via.placeholder.com/21x15" />
          </div>
        </div>
        <div className="w-96 h-96 left-[-10px] top-[392px] absolute">
          <div className="w-96 h-80 pl-12 pr-9 pt-20 pb-14 left-0 top-0 absolute justify-end items-center inline-flex">
            <div className="w-80 h-52 relative">
            </div>
          </div>
          <div className="w-80 h-52 left-[49.38px] top-[248.75px] absolute">
          </div>
        </div>
        <div className="w-72 h-14 left-[6px] top-[9px] absolute">
          <div className="w-52 h-12 left-[82px] top-[7px] absolute text-center text-white text-2xl font-medium">Nearby</div>
          <img className="w-10 h-10 left-0 top-0 absolute" src="https://via.placeholder.com/40x40" />
        </div>
      </div>
    </div>
  )
}
