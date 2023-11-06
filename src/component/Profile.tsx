import React from 'react';

const Profile = ()=> {

  const profile = {
  }

  return(
    <div className='profile'>
      <div className='profileimg'>
        {/*顔写真を〇で左に表示*/}
        <img src='Profileimage.jpg'/>
      </div>
      {/*詳細を右に表示*/}
      <div className='profilecontent'>
        <h2>Profile</h2>
        <p>Name:  KAZUMA TSUBOTA</p>
        <p>Age:  27</p>
        <p>Born:  大阪府大阪市</p>
        <p>Lived:  沖縄県沖縄市</p>
      </div>    
    </div>
   );
}

export default Profile;