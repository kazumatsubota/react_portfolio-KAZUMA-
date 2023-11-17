import React from 'react';

const Profile:React.FC = ()=> {

  const profile = {
  }

  return(
    <div className='mt-28 flex justify-center'>
      <div className='mr-28'>
        {/*顔写真を〇で左に表示*/}
        <img src='Profileimage.jpg' className='rounded-t-full rounded-b-full w-56 h-56'/>
      </div>
      {/*詳細を右に表示*/}
      <div className='relative'>
        <h2 className='text-3xl'>Profile</h2>
        <div className='text-xl mt-10'>
        <p>Name:  KAZUMA TSUBOTA</p>
        <p>Age:  27</p>
        <p>Born:  大阪府大阪市</p>
        <p>Lived:  沖縄県沖縄市</p>
        </div>
      </div>    
    </div>
   );
}

export default Profile;