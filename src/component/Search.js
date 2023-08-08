import React from 'react'

export default function search() {
  return (
    <div>
      <div className="w-96 h-96 relative bg-sky-500">
        <div className="w-96 h-96 left-0 top-[76px] absolute bg-white rounded-tl-3xl rounded-tr-3xl" />
        <div className="w-64 h-16 left-[22px] top-[102px] absolute">
          <div className="w-64 h-10 left-0 top-0 absolute text-black text-2xl font-semibold">Your Results</div>
          <div className="w-32 h-6 left-[5px] top-[39px] absolute">
            <div className="w-20 h-6 left-0 top-0 absolute bg-gray-200 rounded-3xl" />
            <div className="w-28 h-5 left-[10px] top-[5.06px] absolute opacity-80 text-black text-xs font-semibold">Filter</div>
            <img className="w-5 h-4 left-[50px] top-[5.06px] absolute" src="https://via.placeholder.com/21x15" />
          </div>
        </div>
        <div className="w-96 h-96 left-[-8px] top-[102px] absolute">
          <div className="w-96 h-96 left-0 top-0 absolute">
            <div className="w-96 h-80 pl-12 pr-9 pt-20 pb-12 left-0 top-0 absolute justify-end items-center inline-flex">
              <div className="w-80 h-52 relative">
              </div>
            </div>
            <div className="w-80 h-52 left-[49.38px] top-[238.98px] absolute">
            </div>
          </div>
          <div className="w-96 h-96 left-0 top-[377px] absolute">
            <div className="w-96 h-80 pl-12 pr-9 pt-20 pb-12 left-0 top-0 absolute justify-end items-center inline-flex">
              <div className="w-80 h-52 relative">
              </div>
            </div>
            <div className="w-80 h-52 left-[49.38px] top-[238.98px] absolute">
            </div>
          </div>
        </div>
        <div className="w-96 h-12 left-[7px] top-[13px] absolute">
          <div className="w-96 h-12 left-0 top-0 absolute bg-white rounded-3xl" />
          <div className="left-[44px] top-[13px] absolute text-zinc-800 text-xl font-normal">Search.....</div>
          <img className="w-9 h-9 left-[7px] top-[7px] absolute" src="https://via.placeholder.com/38x38" />
        </div>
      </div>
    </div>
  )
}
