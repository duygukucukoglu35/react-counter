import { useState } from "react";
 function App() {
   const [counter, setCounter] = useState(0);

 //increase counter fonksiyonum
  const increase = () => {
    if(counter===30){
      
    }
    else{
      setCounter((count) => count + 1)
    }

  };

//decrease counter fonksiyonum
 const decrease = () => {
  if(counter===0){

  }
  else{
    setCounter((count) => (count - 1));
  }
 
 };

  //reset counter fonksiyonum
 const reset = () => {
setCounter(0);
 };

 return (
    <div className="container">
       <div className="counter">
       <div className="btn__container">
       <span className="counter__output">{counter}</span>
          <div className="all">
         <div className="btn">
            <button className="control__btn1" onClick={increase}> {/*butona tıklayınca artıyor*/}
              +             </button>
             <button className="control__btn2" onClick={decrease}>  {/*butona tıklayınca azalıyor*/}
              -
            </button>
          </div>
          <div className="rst">
             <button className="reset" onClick={reset}>   {/*butona tıklayınca sıfırlıyor*/}
              Reset
            </button>
           </div>
          </div>
         </div>
       </div>
      <div className="counter__enter">
         <span className="text">
          {(counter % 10 ===0 && counter !==0) ? <p>{counter} Sayısı gösterilmektedir</p> : <p></p>} {/*10,20,30 olduğunda yazım görünmeli değilse görünmesin*/}
           </span>
       </div>
     </div>
   );
 }
 export default App;