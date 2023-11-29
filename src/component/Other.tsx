import React from 'react';
import {Link} from 'react-router-dom';
import OtherLikes from './Otherlikes';

const evaluation =[
 {name:'Great'},
 {name:'Nice'},
 {name:'Good'}
];


const Other: React.FC= ()=> {

  return(
    <div className='mt-40'>
      <h3 className='text-3xl text-center'><span className='span'>E</span>valuation</h3>
      <div className='flex justify-center mt-20'>
        {evaluation.map((evaluationItem,i)=>{
          return(
            <OtherLikes
             name={evaluationItem.name}
            />
          );
        })}
      </div>
      <div className='relative top-20 text-center'>
        <button className='homeBotton'><Link to="/">Homeに戻る</Link></button>
      </div>
    </div>
    
   );
}

export default Other;