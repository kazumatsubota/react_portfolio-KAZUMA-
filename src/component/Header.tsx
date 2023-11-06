import React from 'react';
import HCarrer from './HCarrer';

const Header =()=>{
  const HcarrerList = [
    {name:'Past'},
    {name:'Presents'},
    {name:'Future'}
  ];

  return(
    <header>
     <img src='topimage.webp' />
     <div className='header'>
     <h1>KAZUMA TSUBOTA</h1>
     <h1>Official Site</h1>
      {/*画面いっぱいの画像、スライドしても固定*/}
     <div className='headerList'>
       <ul>
         <li><a href='Profile'>Profile</a></li>
         <li><a href='Likes'>Likes</a></li>
         <li>
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