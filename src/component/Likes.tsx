import React from 'react';
import PhotoLibrary from './PhotoLibrary';
import Likescontents from './Likescontens';
import {Link} from 'react-router-dom';


const Likes: React.FC = ()=> {

  const imgs = [
    {img:'../Images/library1.jpg'},
    {img:'../Images/library2.jpg'},
    {img:'../Images/library3.jpg'},
    {img:'../Images/library4.jpg'},
    {img:'../Images/library5.jpg'},
    {img:'../Images/library6.jpg'},
    {img:'../Images/library7.jpg'},
    {img:'../Images/library8.jpg'}
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


  return(
    <div className='mt-20'>
      <h2 className='text-3xl text-center'><span className='span'>L</span>ikes</h2>
      <div className='flex  mt-10 ml-28'>
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
        <div className='mt-10 flex flex-wrap justify-center'>
          {imgs.map((imgItem,i)=>{
            return(
              <PhotoLibrary key={i}
              img={imgItem.img}
              />

            );
     
          })}
        </div>
      </div>
      <div className='relative top-20 text-center'>
          <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
      </div>
      
    </div>
   );
}

export default Likes;