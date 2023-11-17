import React from 'react';
import HCarrer from './HCarrer';

const Header:React.FC =()=>{
  const HcarrerList = [
    {name:'Past'},
    {name:'Presents'},
    {name:'Future'}
  ];

  return(
    <header className='relative'>
     <div className=''>
      <img src='topimage.webp' className='z-0 h-screen w-screen'/>
      <h1 
      className='absolute top-80 right-80 z-10 text-white text-5xl overflow-x-visible w-60 '>
        KAZUMA TSUBOTA Official Site</h1>
     <div className='absolute top-10 left-10 z-10 '>
       <ul className='flex  text-white text-2xl '>
         <li className='p-8'><a href='Profile'>Profile</a></li>
         <li className='p-8'><a href='Likes'>Likes</a></li>
         <li className='p-8'>
           <a href='Carrer'>Carrer</a>
           {/*Carrerのボタンを押すと下記のリストが表示*/}
           {HcarrerList.map((HcarrerItem)=>{
           return(
          <HCarrer 
            name={HcarrerItem.name}
          />
           );
           })}
         </li>
       </ul>
      </div>
      </div>
    </header>

  );
}
  

export default Header;