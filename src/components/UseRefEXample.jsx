import React, { useRef } from 'react'

function UseRefEXample() {
    const sectionRef = useRef(null)
    function handleClick(){
        sectionRef.current.scrollIntoView({behavior:"smooth"})
    }
    console.log('sectionRef is ',sectionRef.current)
  return (
    <>
      <button onClick={handleClick}>Go to Section</button>

      <div style={{ height: "100vh" }}></div>

      <div ref={sectionRef}>
        <h2>Target Section</h2>
      </div>
    </>
  )
}

export default UseRefEXample


// import { useState, useRef, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// export default function UseRefExample() {
    
//     const [text, setText] = useState("");
//     const prevRef = useRef("");
//       const isFirstRender = useRef(true);


//     useEffect(() => {
//         // store previous value
//         if(isFirstRender.current){
//             isFirstRender.current = false;
//             console.log("effect is not runnig ------> ")
//             return;
//         }
//         console.log('effect run this time or not');
        
//         prevRef.current = text;
//     }, [text]);


//     const inputElement = useRef(null);
//     const count = useRef(0);
//     console.log('count value is ',count);
    
//     console.log('inputElement is ',inputElement);
//      const focusInput = () => {
//     inputElement.current.focus();
//        console.log('inputElement is inside the useRef ',inputElement.current);
//   };

//  useEffect(()=>{
//   focusInput();
//  },[])

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//       <button onClick={() => {count.current = count.current + 1; console.log('count.current is ',count.current)}}>count in cosole</button>

//       <input value={text} onChange={e => setText(e.target.value)} />
//       <p>Current: {text}</p>
//       <p>Previous: {prevRef.current}</p>
//     </>
//   );

// }