import React from 'react';

const Contact:React.FC =()=>{

  return(
    <footer>
      <div className='mt-5'>
        <h2 className='text-3xl mb-5 text-center'>Contact</h2>
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
    </footer>
    
   );
}

export default Contact;