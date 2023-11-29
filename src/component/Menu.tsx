import React from 'react';
import Profile from './Profile';
import Likes from './Likes';
import Carrer from './Carrer';
import Other from './Other';
import {Link} from 'react-router-dom';
import {useRef} from 'react';
import { gsap } from 'gsap';
import {Link as Scroll } from 'react-scroll';

type Props = {
  link:any;
  menu:string;
}

const Menu:React.FC<Props>= ({link,menu}) =>{

  const Headerlistref = useRef(null);

  const honMouseover = () =>{
 
    gsap.to(Headerlistref.current,{y:-10})
  };
  
  const honMouseout = () =>{
    gsap.to(Headerlistref.current,{y:0})
  }

  return(
       
        <div className='resmenulist name'
        ref={Headerlistref}
        onMouseOver={honMouseover} 
        onMouseOut={honMouseout}
        ><Scroll to="name" smooth={true} duration={600} offset={720}><Link to={link} className='p-8 header-nav'>{menu}</Link></Scroll>
          </div>
               
      );

}

export default Menu;