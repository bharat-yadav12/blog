import React, { useState, useRef,useLayoutEffect } from 'react'

function UseLayoutEffect() {
  const bottomRef = useRef(null);
  const [go, setGo] = useState(false);

  useLayoutEffect(() => {
    if (go) {
      // scroll here
      bottomRef.current.scrollIntoView();
      setGo(false);
    }
  }, [go]);
//  const intervalId =  setInterval(() => {
//     console.log('number',Math.random());
//   }, 100000);
// console.log('interval id is ',intervalId)
// setTimeout(() => {
//  alert('hello setTimeout')
// },5000)
// const timerId = setTimeout(() => {
//   alert("callback executed after 5 seconds :: ")
// },5000)

// clearTimeout(timerId)
// console.log("timerId is printed before the setTimeout is executed :: ",timerId);
// console.log("Start");

// async function handleAsync(){
// try {
//   const id = await setTimeout(() => {
//     console.log("This runs after ~2 seconds");
//   }, 2000);  // One-time timer
  
//   const id1 = await setInterval(() => {
//     console.log("This runs every 1 second");
//   }, 1000);  // Repeating timer
// } catch (error) {
  
// }
// }
// handleAsync();

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Now you can use await!
async function handleAsync() {
  console.log("Start");

  await delay(2000);  // waits 2 seconds
  console.log("This runs after ~2 seconds");

  console.log("End");
}

handleAsync();

console.log("End");


  return (
    <>
      <button onClick={() => setGo(true)}>
        Scroll to Bottom
      </button>

      <div style={{ height: "100vh" }}></div>

      <div ref={bottomRef}>
        <h2>Bottom Section</h2>
      </div>
    </>
  );
}

export default UseLayoutEffect