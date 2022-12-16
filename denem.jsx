// import { React, useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);

//   //increase counter
//   const increase = () => {
//     setCounter((count) => count + 1);
//   };

//   //decrease counter
//   const decrease = () => {
//     setCounter((count) => (count - 1) > 0);
//   };

//   //reset counter
//   const reset = () => {
//     setCounter(0);
//   };


// // const handleClick=event=>{

// // }

//   return (
//     <div className="container">
//       <div className="counter">
       
//         <div className="btn__container">
//         <span className="counter__output">{counter}</span>
          
//           <div className="all">
//           <div className="btn">
//             <button className="control__btn1" onClick={increase}>
//               +
//             </button>
//             <button className="control__btn2" onClick={decrease}>
//               -
//             </button>
//           </div>
//           <div className="rst">
//             <button className="reset" onClick={reset}>
//               Reset
//             </button>
//           </div>
//           </div>
//         </div>
//       </div>
//       <div className="counter__enter">
//         <span className="text">
//           {(counter % 10 ==0) ? <p>{counter} Sayısı gösterilmektedir</p> : <p></p>}
//           </span>
//       </div>
//     </div>
//   );
// }

// export default App;
