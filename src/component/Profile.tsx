import React from 'react';
import { Link } from 'react-router-dom';
import {useRef,useState,useEffect} from 'react';
import useSWR from "swr";

const Profile: React.FC = () => {

  const name = useRef(null);

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

    const api_endpoint = process.env.REACT_APP_MICROCMS_API_BASEURL + 'profile-name';

    console.log(api_endpoint);

    fetch(api_endpoint, requestOptions)
        .then(response => response.json())
        .then(result => 
          {setUserName(result['profilename'])
           setUserBorn(result['profileborn'])
           setUserLived(result['profilelived'])
          }
          
          )
        .catch(error => console.log('error', error));
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
          <p ref={name}> 
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
