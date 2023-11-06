import React from 'react';

type Props = {
  name:string;
}

const HCarrer: React.FC<Props>= ({name})=> {

  return(
    <div className='header'>
      {name}
    </div>
   );
}

export default HCarrer;