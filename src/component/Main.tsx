import React from 'react';
import Profile from './Profile';
import Likes from './Likes';
import Carrer from './Carrer';

const Main = () =>{

  return(
    <main>
      <div>
      <div className='Mainprofile'>
        <Profile/>
      </div>
      <div className='Mainlikes'>
        <Likes/>
      </div>
      <div className='MainCarrrer'>
        <Carrer/>
      </div>
    </div>
    </main>

    
  
      );

}

export default Main;