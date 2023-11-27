import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

export const Profile: React.FC = () => {


  const fetcher = (url: string) => {
    const myHeaders = new Headers();
    myHeaders.append(
      process.env.REACT_APP_MICROCMS_HEADER_KEY as string,
      process.env.REACT_APP_MICROCMS_API_KEY as string
    );

    return fetch(url, { method: 'GET', headers: myHeaders }).then(res => res.json());
  };



  const api_endpoint = process.env.REACT_APP_MICROCMS_API_BASEURL + 'profile';

  const { data, error } = useSWR(api_endpoint, fetcher);

  if (error) return <div>エラーが発生しました</div>;
  if (!data) return <div>読み込み中...</div>;
  

  return (
    <div className='mt-28 flex justify-center'>
      <div className='mr-28'>
        {/*顔写真を〇で左に表示*/}
        <img src='../Images/Profileimage.jpg' className='rounded-t-full rounded-b-full w-56 h-56' />
      </div>
      {/*詳細を右に表示*/}
      <div className='relative'>
        <h2 className='text-3xl'><span className='span'>P</span>rofile</h2>
        <div className='text-xl mt-10'>
          <p>
            Name:  {data.profilename}</p>
          <p>Age:  27</p>
          <p>Born:  OSAKA</p>
          <p>Lived:  OKINAWA</p>
        </div>
        <div className='relative top-20'>
          <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
