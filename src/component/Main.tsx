import React from 'react';
import Profile from './Profile.1';
import Likes from './Likes';
import Carrer from './Carrer';
import Other from './Other';

const Main:React.FC = () =>{

  return(
    <main>
      <div>
      <div className=''>
        <Profile/>
      </div>
      <div className=''>
        <Likes/>
      </div>
      <div className=''>
        <Carrer/>
      </div>
      <div className=''>
        <Other/>
      </div>
    </div>
    </main>

    
  
      );

}

export default Main;