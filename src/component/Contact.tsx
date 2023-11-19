import React from 'react';
import {Link} from 'react-router-dom';



const Contact:React.FC =()=>{

  return(
    <footer>
      <div className='mt-20'>
        <h2 className='text-3xl mb-5 text-center'><span className='span'>C</span>ontact</h2>
        <div className='text-center'>
        <p className='text-xl'>Name</p>
        <input className='w-96 h-10 border-black border-solid border bg-white' type='text' />
        <p className='text-xl'>Email</p>
        <input className='w-96 h-10 border-black border-solid border bg-white' type='email' />
        <p className='text-xl'>Comment</p>
        <textarea className='w-96 h-36 text-center  border-black border-solid border bg-white'/>
        <div className='mt-10'>
        <input className='w-32 h-10 border-black border-solid border 	bg-gray-800 text-white' type='submit' value='送信' />
        </div>
        
        </div> 
      </div>
      <div className='relative top-20 text-center'>
          <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
      </div>
    </footer>
    
   );
}

export default Contact;