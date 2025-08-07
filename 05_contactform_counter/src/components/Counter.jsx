import React,{useState} from 'react'

function counter() {
  //Method2
  const [counter, setCounter] = useState(0)
  const [speed, setSpeed] = useState(1); // default speed x1

  //Method 1

  // let counter = 3 
  // this is old method
  // update the counter using useState hook

  // const addValue = () => {
  //   //counter = counter + 1
  //   setCounter(counter + 1)
  //   console.log("01_addvalue", counter);
  // }

  //   const removeValue = () => {
  //   //counter = counter - 1
  //   setCounter(counter - 1)
  //    console.log("02_addvalue", counter);
  // }

  const addValue = () => {
    setCounter(prev => prev + speed);
    console.log(`01_addcounter${speed},`, counter + speed);
  };

  const removeValue = () => {
    setCounter(prev => prev - speed);
    console.log(`02_removecounter${speed},`, counter - speed);
  };

  const resetValue = () => {
    setCounter(0)
    console.log("01_addvalue", 0);
  }

  return (
   <div className="mx-auto mt-10 p-8 w-1/2 bg-gray-500 rounded-2xl" >
    {/* main heading and Counter Value */}
      <h1 className='text-center text-2xl mb-3.5'>Counter App</h1>
      <p  className='w-35 mx-auto text-xl bg-white rounded-xl p-2'>Counter: {counter}</p>
  
  
    <div  className="flex flex-col items-center justify-center gap-4 mt-5 md:flex-row ">

        {/* select prev speed x1, x2, x3 ... */}
        <label className="font-semibold">Select Speed:</label>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="border px-3 py-1 rounded"
        >
          <option value={1}>x1</option>
          <option value={2}>x2</option>
          <option value={3}>x3</option>
          <option value={5}>x5</option>
        </select>
      
      {/* add btn */}
      <button  onClick={addValue}   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300" >
        add value
      </button>
      
      {/* remove btn */}
      <button onClick={removeValue} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
        remove value
      </button> 

      {/* reset btn */}
      <button onClick={resetValue}  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
        reset value
      </button> 
      
       {/* Method3 */}
       {/* <button class="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300" 
                   onClick={() => setCounter((counter) => counter + 1)}>
          simple counter
        </button> */}

     </div>
    </div>
  )
}

export default counter
