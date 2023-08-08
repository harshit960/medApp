import React from 'react'

export default function profile() {
  return (
    <div>
      <div className="w-96 h-96 relative bg-zinc-100">
        <div className="w-96 h-12 left-0 top-[794px] absolute">
          <div className="w-96 h-12 left-0 top-0 absolute bg-white" />
          <img className="w-9 h-9 left-[35px] top-[8px] absolute opacity-80 shadow" src="https://via.placeholder.com/35x36" />
          <img className="w-9 h-9 left-[321px] top-[8px] absolute opacity-80 shadow" src="https://via.placeholder.com/35x36" />
          <img className="w-9 h-9 left-[133px] top-[8px] absolute opacity-80 shadow" src="https://via.placeholder.com/35x36" />
          <img className="w-9 h-9 left-[233px] top-[8px] absolute opacity-80 shadow" src="https://via.placeholder.com/35x36" />
        </div>
        <div className="w-96 h-96 left-[20px] top-[269px] absolute">
        </div>
        <div className="w-32 h-8 left-[19px] top-[24px] absolute text-black text-2xl font-semibold">My Profile</div>
        <div className="w-96 h-14 left-[18px] top-[719px] absolute">
          <div className="w-96 h-14 left-0 top-0 absolute bg-white shadow" />
          <div className="w-80 h-8 left-[14px] top-[13px] absolute text-center text-black text-xl font-bold">LOGOUT</div>
        </div>
        <div className="w-96 h-40 left-[15px] top-[90px] absolute">
          <div className="w-96 h-40 left-0 top-0 absolute">
            <div className="w-96 h-40 left-0 top-0 absolute bg-white rounded-lg" />
            <img className="w-16 h-16 left-[15px] top-[17.17px] absolute rounded-full border border-neutral-400" src="https://via.placeholder.com/65x64" />
            <div className="w-40 h-5 left-[97px] top-[24.04px] absolute text-black text-xl font-bold">Hi Hira!</div>
          </div>
          <div className="w-48 h-6 left-[99px] top-[46px] absolute text-black text-xs font-light">mremail.email.com</div>
          <div className="w-48 h-6 left-[99px] top-[64px] absolute text-black text-sm font-extralight">+91-9604746610</div>
          <div className="w-24 h-12 left-[81px] top-[100px] absolute">
            <div className="w-20 h-8 left-[15px] top-0 absolute bg-sky-500 rounded-lg" />
            <div className="w-24 h-10 left-0 top-[8px] absolute text-center text-white text-base font-bold">EDIT</div>
          </div>
        </div>
      </div>

    </div>
  )
}
