import React from 'react';
import Profile from './Profile';
import Likes from './Likes';
import Carrer from './Carrer';
import Contact from './Contact';
import {Link} from 'react-router-dom';

<<<<<<< HEAD


=======
>>>>>>> fb626f94037921ca6ed6a9812eb2953001e5a3c5
const Header:React.FC =()=>{
  const HcarrerList = [
    {name:'Past'},
    {name:'Presents'},
    {name:'Future'}
  ];

  return(
    <header className='relative'>
     <div className=''>
<<<<<<< HEAD
      <img src='topimage.webp' className='z-0 h-screen w-screen bg-cover'/>
=======
      <img src='topimage.webp' className='z-0 h-screen w-screen'/>
>>>>>>> fb626f94037921ca6ed6a9812eb2953001e5a3c5
      <h1 
      className='absolute top-80 right-80 z-10 text-white text-5xl overflow-x-visible w-60 '>
        KAZUMA TSUBOTA Official Site</h1>
     <div className='absolute top-10 left-10 z-10 '>
       <ul className='flex  text-white text-2xl '>
<<<<<<< HEAD
        <li><Link to="/" className='p-8 header-nav'>Home</Link></li>
         <li><Link to='./Profile' className='p-8 header-nav'>Profile</Link></li>
         <li><Link to='./Likes' className='p-8 header-nav'>Likes</Link></li>
         <li>
          <Link to='./Carrer' className='p-8 header-nav'>Carrer</Link>
           {/*Carrerのボタンを押すと下記のリストが表示
=======
         <li className='p-8'><a href='Profile'>Profile</a></li>
         <li className='p-8'><a href='Likes'>Likes</a></li>
         <li className='p-8'>
           <a href='Carrer'>Carrer</a>
           {/*Carrerのボタンを押すと下記のリストが表示*/}
>>>>>>> fb626f94037921ca6ed6a9812eb2953001e5a3c5
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