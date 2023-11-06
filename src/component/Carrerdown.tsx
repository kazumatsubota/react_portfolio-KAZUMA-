import React from 'react';

type Props = {
  name:string;
  content1:string;
  content2:string;
  content3:string;
}

const Carrerdown: React.FC<Props>= ({name,content1,content2,content3})=> {

  return(
    <div className='Carrerdown'>
      <div className='CarrerdownList'>
        <h2>{name}</h2>
        <p>{content1}</p>
        <p>{content2}</p>
        <p>{content3}</p>
      </div>   
     
    </div>
   );
}

export default Carrerdown;