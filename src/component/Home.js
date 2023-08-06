import React from 'react'

export default function home() {
  return (
    <><div>home</div>
      <div class="flex items-center">
        <input type="text" placeholder="search for a doc" class="py-2 px-4 border border-gray-300 rounded-1-md text-gray-700 ">
          <img src="search_icon.png" alt="Search" class="w-5 h-5">
          </img>
        </input>
      </div>
    </>
  )
}
