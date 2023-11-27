import React from 'react';
import Profile from './Profile.1';
import Likes from './Likes';
import Carrer from './Carrer';
import Contact from './Contact';
import Other from './Other';
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';
import {useRef} from 'react';


const Header:React.FC =()=>{
  const HcarrerList = [
    {name:'Past'},
    {name:'Presents'},
    {name:'Future'}
  ];

const hImg =".headerimg";
const hName =".headername";
const hList =".headerlist";
const hMouse=".hMouseover";

const HeaderonLoad = () =>{

  gsap.set([hImg,hName,hList],{opacity:0,y:-100});

  const tl = gsap.timeline();

  tl.to(hImg,{opacity:1,y:0,duration: 0.8,})

  .to(hName,{opacity:1,y:0,duration: 0.8,delay:0.5})

  .to(hList,{opacity:1,y:0,duration: 0.8,delay:0.5});

};

const headerlistref = useRef(null);

const honMouseover = () =>{
 
  gsap.to(headerlistref.current,{y:-10})
};

const honMouseout = () =>{
  gsap.to(headerlistref.current,{y:0})
}



  return(
    <header className='relative'>
     <div 
     onLoad={HeaderonLoad}>
      <img src='../Images/topimage.webp' className='z-0 h-screen w-screen bg-cover headerimg'/>
      <h1 
      className='absolute top-80 right-80 z-10 text-white text-5xl overflow-x-visible w-60 headername'>
        KAZUMA TSUBOTA Official Site</h1>
     <div className='absolute top-10 left-10 z-10  headerlist'>
       <ul className='flex  text-white text-2xl '>
        <li 
        ref={headerlistref}
        onMouseOver={honMouseover} 
        onMouseOut={honMouseout} 
        ><Link to="/" className='p-8 header-nav'>Home</Link></li>
         <li 
         ref={headerlistref}
         onMouseOver={honMouseover} 
         onMouseOut={honMouseout} 
         ><Link to='./Profile' className='p-8 header-nav'>Profile</Link></li>
         <li 
         ref={headerlistref}
         onMouseOver={honMouseover} 
         onMouseOut={honMouseout} 
         ><Link to='./Likes' className='p-8 header-nav'>Likes</Link></li>
         <li 
         ref={headerlistref}
         onMouseOver={honMouseover} 
         onMouseOut={honMouseout} 
         ><Link to='./Carrer' className='p-8 header-nav'>Carrer</Link>
           {/*Carrerのボタンを押すと下記のリストが表示
           {HcarrerList.map((HcarrerItem)=>{
           return(
          <HCarrer 
            name={HcarrerItem.name}
          />
           );
           })}*/}
         </li>
         <li 
        ref={headerlistref}
        onMouseOver={honMouseover} 
        onMouseOut={honMouseout} 
         ><Link to="./contact" className='p-8 header-nav'>Contact</Link></li>
         <li 
         ref={headerlistref}
         onMouseOver={honMouseover} 
         onMouseOut={honMouseout} 
         ><Link to="./other" className='p-8 header-nav'>Other</Link></li>
               
       </ul>
       
      </div>
      </div>
    </header>

  );
}
  

export default Header;