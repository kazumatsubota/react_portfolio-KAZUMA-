import React from 'react';
import Profile from './Profile';
import Likes from './Likes';
import Carrer from './Carrer';
import Contact from './Contact';
import {Link} from 'react-router-dom';



const Header:React.FC =()=>{
  const HcarrerList = [
    {name:'Past'},
    {name:'Presents'},
    {name:'Future'}
  ];

  return(
    <header className='relative'>
     <div className=''>
      <img src='../Images/topimage.webp' className='z-0 h-screen w-screen bg-cover'/>
      <h1 
      className='absolute top-80 right-80 z-10 text-white text-5xl overflow-x-visible w-60 '>
        KAZUMA TSUBOTA Official Site</h1>
     <div className='absolute top-10 left-10 z-10 '>
       <ul className='flex  text-white text-2xl '>
        <li><Link to="/" className='p-8 header-nav'>Home</Link></li>
         <li><Link to='./Profile' className='p-8 header-nav'>Profile</Link></li>
         <li><Link to='./Likes' className='p-8 header-nav'>Likes</Link></li>
         <li>
          <Link to='./Carrer' className='p-8 header-nav'>Carrer</Link>
           {/*Carrerのボタンを押すと下記のリストが表示
           {HcarrerList.map((HcarrerItem)=>{
           return(
          <HCarrer 
            name={HcarrerItem.name}
          />
           );
           })}*/}
         </li>
         <li><Link to="./contact" className='p-8 header-nav'>Contact</Link></li>
               
       </ul>
       
      </div>
      </div>
    </header>

  );
}
  

export default Header;