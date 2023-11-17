import React from 'react';

type Props = {
  name:string;
  content1:string;
  content2:string;
  content3:string;
}

const Carrerdown: React.FC<Props>= ({name,content1,content2,content3})=> {

  return(
    <div className=''>
      <div className='flex justify-center'>
        <div className='mb-20  w-1/3 h-64  bg-blue-50   border-black border-solid border rounded-t-xl rounded-b-xl'>
        <h2 className='text-xl text-center mb-10 mt-5'>{name}</h2>
        <p className='text-base ml-5'>{content1}</p>
        <p className='text-base ml-5'>{content2}</p>
        <p className='text-base ml-5'>{content3}</p>
        </div>
      </div>   
     
    </div>
   );
}

export default Carrerdown;