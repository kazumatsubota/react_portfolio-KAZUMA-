import { type } from 'os';
import React,{useState,useEffect} from 'react';

type Props ={
  name:string;
}


const OtherLikes: React.FC<Props>= ({name})=> {
  const[count,setCount]=useState(0);


  useEffect(()=>{
   document.title = 'React App'
  });

  const countUp = () =>{
    setCount(count+1);
  };

  return(
    <div className='text-center pl-20 relative right-10'>
      <p className='text-2xl'>{name} {count}</p>
      <button className='clickButton' onClick={countUp}>Click</button>
    </div>
    
   );
}

export default OtherLikes;