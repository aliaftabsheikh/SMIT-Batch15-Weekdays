import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  let userRef = useRef(null)
  let passwordRef = useRef(null)


  console.log("user", userRef.current);
  

  // let valueRef = useRef(1)
  // console.log("valueRef-- ", valueRef.current);


  // let countRef = useRef(0)

  let boxRef = useRef(null)
  

  //  function increment() {
  //   countRef.current = countRef.current + 1
  //   setCount(countRef.current)
  //   console.log('Value is :' + countRef.current);
  //   }

  //  function decrement() {
  //   countRef.current = countRef.current - 1
  //   setCount(countRef.current)
  //   console.log('Value is :' + countRef.current);
  //   }

    useEffect(() => {
        console.log('Run on every render');
    });


    function updateBox() {
      boxRef.current.style.backgroundColor = 'red'
    }

  function handleSubmit(e) {
    e.preventDefault()
    
    console.log('Username: ', userRef.current.value);
    console.log('Password: ', passwordRef.current.value);
  }

  return (

   
    <div className='flex justify-center items-center h-screen flex-col gap-5'>
     
      {/* <p >
        Count is: {countRef.current}
      </p>


<button onClick={increment}>+</button>
<button onClick={decrement}>-</button> */}



{/* ------------------------------------------------------------------------------- */}

<div
ref={boxRef}

className='box' >
  BOX
</div> 

<div
ref={boxRef}

className='box' >
  BOX
</div> 


 <button onClick={updateBox} className='bg-blue-500 text-white py-2 px-4 rounded'>
  Update 
</button>



{/* -------------------------------------------------------------------------- */}

{/* <form onSubmit={handleSubmit}>
  <input
  ref={userRef}
   placeholder='Username' className='border-2 border-gray-300 p-2 rounded ' type="text" name="" id="" />


  <input ref={passwordRef}placeholder='Password' className='border-2 border-gray-300 p-2 rounded ' type="password" name="" id="" />

  <button className='bg-green-500 text-white py-2 px-4 rounded ml-2' type="submit">Submit</button>
</form> */}


    </div>
  
  )
}

export default App
