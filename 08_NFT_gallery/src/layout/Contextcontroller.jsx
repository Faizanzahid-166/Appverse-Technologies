import React from 'react'
import {Sort, Filter, Search} from "../component/index.js";

function Contextcontroller() {
  return (
    <>
      {/* Controls */}
      <div className="flex justify-center gap-6 p-2 mt-[1.1px] bg-gray-300">
          <Search />
          <Filter />
          <Sort />
      </div>
    </>  
  )
}

export default Contextcontroller
