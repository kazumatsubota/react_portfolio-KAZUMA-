import React from 'react';

type Props = {
  img:any;
}


const PhotoLibrary: React.FC<Props> = ({img})=> {


  return(
    <div className=''>
      <img src={img} className='w-72 h-52 ml-10 mt-10 '/>
    </div>
      
   );
}

export default PhotoLibrary;