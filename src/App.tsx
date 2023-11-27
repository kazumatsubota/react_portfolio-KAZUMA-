import React from 'react';
import Header from './component/Header'
import Profile from './component/Profile.1';
import Likes from './component/Likes'
import Carrer from './component/Carrer'
import Contact from './component/Contact'
import Other from './component/Other';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


const App=()=>{
  return(
      <Router>
      <div>
        <Header /> 

        <Routes>
          <Route path="/Profile" Component={Profile}></Route>
          <Route path="/Likes" Component={Likes}></Route>
          <Route path="/Carrer" Component={Carrer}></Route>
          <Route path="/Contact" Component={Contact}></Route>
          <Route path="/Other" Component={Other}></Route>
        </Routes> 
          
     </div>
     </Router>

    
  );
}

export default App;
