import React from 'react';
import Profile from './Profile.1';
import Likes from './Likes';
import Carrer from './Carrer';
import Other from './Other';
import {Link} from 'react-router-dom';

type Props = {
  link:any;
  menu:string;
}

const Menu:React.FC<Props>= ({link,menu}) =>{

  return(
       
        <div
        ><Link to={link} className='p-8 header-nav'>{menu}</Link></div>
               
      );

}

export default Menu;