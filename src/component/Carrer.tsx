import React from 'react';
import Carrerdown from './Carrerdown';
import {Link} from 'react-router-dom';



const Carrer:React.FC= ()=> {

  const McarrerList = [
    {name:'Past',
     content1:'〇 生まれ育ちも大阪',
     content2:'〇 大学時代にダイビングに出会う',
     content3:'〇 就職を機に沖縄に移住'
    },
    {name:'Presents',
     content1:'〇 沖縄に移住して5年目',
     content2:'〇 食品会社に勤務（5年目）',
     content3:'〇 休日は海に行く生活'
    },
    {name:'Future',
    content1:'〇 2拠点生活（沖縄と大阪)',
     content2:'〇 移動力を上げる（仕事も私生活も）',
     content3:'〇 仕事でデザイン+開発に関わりたい'
    }
  ];

  return(
    <div className='mt-20 justify-around'>
      <h2 className='text-3xl mb-20 text-center'><span className='span'>C</span>arrer</h2>
      {McarrerList.map((MCarrerItem)=>{
           return( 
          <Carrerdown 
           name={MCarrerItem.name}
            content1={MCarrerItem.content1}
            content2={MCarrerItem.content2}
            content3={MCarrerItem.content3}
            
          />
           );
           })}
      <div className='relative top-20 text-center'>
        <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
      </div>  
    </div>
    
    
   );
}

export default Carrer;