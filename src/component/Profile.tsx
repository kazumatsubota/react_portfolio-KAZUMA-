import React from 'react';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';


const Profile : React.FC=   ()  => {


  const [profilename,setUserName]=useState('KAZUMA TSUBOTA');
  const [profileborn,setUserBorn]=useState('OSAKA');
  const [profilelived,setUserLived]=useState('OKINAWA');

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
        process.env.REACT_APP_MICROCMS_HEADER_KEY as string,
        process.env.REACT_APP_MICROCMS_API_KEY as string
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    const api_endpoint = process.env.REACT_APP_MICROCMS_API_BASEURL as string;


    console.log(api_endpoint);
    console.log(requestOptions);
    
    const fechData = async()=>{

      const response = await fetch(api_endpoint, requestOptions);

      const content1 = await response.json();
      console.log(content1);
      const content2 = content1.data.content[0];
      console.log(content2);
       setUserName(content2.profilename)
       setUserBorn(content2.profileborn)
       setUserLived(content2.profilelived)
          
    
        // .then(response => response.json())
        // .then(result => 
        //   {setUserName(result['profilename'])
        //    setUserBorn(result['profileborn'])
        //    setUserLived(result['profilelived'])
        //   }
          
          // )
        // .catch(error => console.log('error', error));


    }
    fechData();
    
}, []);

  
  

  return (
    <div className='mt-28 flex justify-center'>
      <div className='mr-28'>
        {/*顔写真を〇で左に表示*/}
        <img src='../Images/Profileimage.jpg' className='rounded-t-full rounded-b-full w-56 h-56' />
      </div>
      {/*詳細を右に表示*/}
      <div className='resprofilelist'>
        <h2 className='text-3xl'><span className='span'>P</span>rofile</h2>
        <div className='text-xl mt-10'>
          <p> 
            Name:  {profilename}</p>
          <p>Age:  27</p>
          <p>Born:  {profileborn}</p>
          <p>Lived:  {profilelived}</p>
        </div>
        <div className='relative top-20 right-28'>
          <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
