import React from 'react';

type Props = {
  img:any;
  name:string;
  content1:string;
  content2:string;
}

const Likescontents: React.FC<Props>= ({img,name,content1,content2})=> {

  return(
    <div className='ml-32 w-64 h-64 relative'>
        <img src={img} className='w-80 h-48'/>
        <h2 className='text-xl text-center mb-10 mt-5'>{name}</h2>
        <div className='-mr-5 absolute -left-5'>
        <p className='text-base ml-5'>{content1}</p>  
        <p className='text-base ml-5'>{content2}</p> 
        </div>    
    </div>
   );
}

export default Likescontents;