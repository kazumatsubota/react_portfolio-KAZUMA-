import React from 'react';
import {Link} from 'react-router-dom';


const Profile:React.FC = ()=> {

  const profile = {
  }

  return(
    <div className='mt-28 flex justify-center'>
      <div className='mr-28'>
        {/*顔写真を〇で左に表示*/}
        <img src='../Images/Profileimage.jpg' className='rounded-t-full rounded-b-full w-56 h-56'/>
      </div>
      {/*詳細を右に表示*/}
      <div className='relative'>
        <h2 className='text-3xl'><span className='span'>P</span>rofile</h2>
        <div className='text-xl mt-10'>
        <p>Name:  KAZUMA TSUBOTA</p>
        <p>Age:  27</p>
        <p>Born:  OSAKA</p>
        <p>Lived:  OKINAWA Prefecture</p>
        </div>
        <div className='relative top-20'>
          <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
        </div>
      </div>    
    </div>
   );
}

export default Profile;