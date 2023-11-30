import React from 'react';
import PhotoLibrary from './PhotoLibrary';
import Likescontents from './Likescontents';
import {Link} from 'react-router-dom';
import { useEffect,useState,useRef } from 'react';
import useSWR from "swr";


const Likes: React.FC = ()=> {
  
  const img = useRef(null);
  const [likes_photo,setUserImg] = useState('');

  const photolibrary = [
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/a1681b904ac043bcaf4c07aba3bbc5de/Library1.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/44b9fa45e9204ad8a37201fe46dde1de/library2.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/76323f629cd84e8eaa0fc582bdbccad6/library3.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/061ab66a627f49cbbbebea6f5ba1183a/library4.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/2188a5280b484665902297858a57284e/library5.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/f596b28f21b44d4c9670768e28a6f2eb/library6.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/9a4b9eeb06cd4192b7400a0e9f0a69d5/library7.jpg'},
    {img:'https://images.microcms-assets.io/assets/01e2a0c71f434a539fea9573e1616238/626b7f63b0974a97bf58e7ebd25f0244/library8.jpg'}
  ];

  const Contents =[
    {img:'../Images/Divingimage.jpg',
     name:'Diving',
     content1:'➡ 大学時代から始めて現在に至る',
     content2:'➡ Skill　RED 300本以上'
    },
    {img:'../Images/Surfingimage.jpg',
     name:'Surfing',
     content1:'➡ 沖縄移住して5年目になり始める',
     content2:'➡ 初めて半年になる'
    },
    {img:'../Images/Cameraimage.jpg',
     name:'Camera',
     content1:'➡ 現在の愛用機はOM-D em-1 Mark2',
     content2:'➡ 主に海洋生物、リフレクション、マジックアワー、星空、猫を撮影'
    }
  ];

  useEffect(()=>{
    const myHeaders = new Headers();
    myHeaders.append(
      process.env.REACT_APP_MICROCMS_HEADER_KEY as any,
      process.env.REACT_APP_MICROCMS_API_KEY as any
    );

    const requestOptions = {
      method:'GET',
      headers:myHeaders,
    };

    const api_endpoint = process.env.REACT_APP_MICROCMS_API_BASEURL+'likes';

    console.log(api_endpoint);

    fetch(api_endpoint,requestOptions)
         .then(response => response.json())
         .then(result => setUserImg(result['likes_photo']))
         .catch(error => console.log('error',error));
  },[]);

  

  return(
    <div className='mt-20'>
      <h2 className='text-3xl text-center'><span className='span'>L</span>ikes</h2>
      <div className='flex flex-wrap mt-10 ml-28 restoplikeslist'>
       {Contents.map((ContentsItem,i)=>{
        return(

          <Likescontents key={i}
          img={ContentsItem.img}
          name={ContentsItem.name}
          content1={ContentsItem.content1}
          content2={ContentsItem.content2}
          />
        );
       })}
        
      </div>
      <div className='mt-40'>
        <h3 className='text-3xl text-center'><span className='span'>P</span>hoto Library</h3>
        <div className='mt-10 flex flex-wrap justify-center' ref={img}>
          {photolibrary.map((photoItem,i)=>{
            return(
              <PhotoLibrary key={i}
              img={photoItem.img}
              />

            );
     
          })}

         {likes_photo}
        </div>
      </div>
      <div className='relative top-20 text-center'>
          <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
      </div>
      
    </div>
   );
}

export default Likes;