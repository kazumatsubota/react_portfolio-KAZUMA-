import React from 'react';
import Carrerdown from './Carrerdown';



const Carrer= ()=> {

  const McarrerList = [
    {name:'Past',
     content1:'・生まれ育ちも大阪',
     content2:'・大学時代にダイビングに出会う',
     content3:'・就職を機に沖縄に移住'
    },
    {name:'Presents',
     content1:'・沖縄に移住して5年目',
     content2:'・食品会社に勤務（5年目）',
     content3:'・休日は海に行く生活'
    },
    {name:'Future',
    content1:'・2拠点生活（沖縄と大阪)',
     content2:'・移動力を上げる（仕事も私生活も）',
     content3:'・仕事でデザイン+開発に関わりたい'
    }
  ];

  return(
    <div className='Carrer'>
      <h2>Carrer</h2>
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
     
    </div>
   );
}

export default Carrer;