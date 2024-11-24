import React from 'react';
import Homepage from './vyoo/home';
import Election from './vyoo/electiondetails';
import Candidate from './vyoo/candidate';
import Voting from './vyoo/voting';
import HelpSupport from './vyoo/helpsupp';
import Notification from './vyoo/notific';
import Result from './vyoo/result';
import Signin from './vyoo/signin';
import Profile from './vyoo/profile';
import Setting from './vyoo/setting';
import Logout from './vyoo/logout';
import Splash from './vyoo/splash';
import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element={ <Splash />} />
      <Route path= "/signin" element={ <Signin/>} />
      <Route path= "/home" element={ <Homepage/>}/>
      <Route path= "/notific" element={ <Notification/>}/>
      <Route path= "/profile" element={ <Profile/>}/>
      <Route path= "/helpsupp" element={ <HelpSupport/>}/>
      <Route path= "/election" element={ <Election/>}/>
      <Route path= "/setting" element={ <Setting/>}/>
      <Route path= "/result" element={ <Result/>}/>
      <Route path= "/candidate" element={ <Candidate/>}/>
      <Route path= "/voting" element={ <Voting/>}/>
      <Route path= "/logout" element={ <Logout/>}/>
      
    </Routes>
    </>
  );
}

export default App;
