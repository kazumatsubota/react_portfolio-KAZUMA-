import React from 'react';
import Profile from './Profile';
import Likes from './Likes';
import Carrer from './Carrer';
import Other from './Other';
import {Link} from 'react-router-dom';
import {useRef} from 'react';
import { gsap } from 'gsap';

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
       
        <div 
        ref={Headerlistref}
        onMouseOver={honMouseover} 
        onMouseOut={honMouseout}
        ><Link to={link} className='p-8 header-nav'>{menu}</Link></div>
               
      );

}

export default Menu;