import React from 'react';
import Menu from './Menu';
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';
import {useRef} from 'react';


const Header:React.FC =()=>{

  const Contents =[
    {link:'/',
     menu:'Home',
    },
    {link:'./Profile',
     menu:'Profile',
    },
    {link:'./Likes',
     menu:'Likes',
    },
    {link:'./Carrer',
     menu:'Carrer',
    },
    {link:'./contact',
     menu:'Contact',
    },
    {link:'./other',
     menu:'Other',
    }
  ];

const hImg =".headerimg";
const hName =".headername";
const hList =".headerlist";

const HeaderonLoad = () =>{

  gsap.set([hImg,hName,hList],{opacity:0,y:-100});

  const tl = gsap.timeline();

  tl.to(hImg,{opacity:1,y:0,duration: 0.8,})

  .to(hName,{opacity:1,y:0,duration: 0.8,delay:0.5})

  .to(hList,{opacity:1,y:0,duration: 0.8,delay:0.5});

};

const Headerlistref = useRef(null);

const honMouseover = () =>{
 
  gsap.to(Headerlistref.current,{y:-10})
};

const honMouseout = () =>{
  gsap.to(Headerlistref.current,{y:0})
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
      <div className='flex  text-white text-2xl '>

      {Contents.map((ContentsItem,i)=>{
        return(

          <Menu key={i}
          link={ContentsItem.link}
          menu={ContentsItem.menu}
          ref={Headerlistref}
          onMouseOver={honMouseover} 
          onMouseOut={honMouseout}
          />
        );
       })}
      </div>
      </div>
      </div>
    </header>

  );
}
  

export default Header;