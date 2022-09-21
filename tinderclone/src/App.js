
import './App.css';
import Header from './Components/Header'
import SwipeButtons from './Components/SwipeButtons';
import TinderCards from './Components/TinderCards';
import {Route,Routes} from 'react-router-dom'
import ProfileC from './Components/ProfileC';
import Profile from './Components/Profile';
import Chats from './Components/Chats';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import Matches from './Components/Matches';
import EditInfo from './Components/EditInfo.js';
import Setting from './Components/Setting';
import ProfileForward from './Pages/ProfileForward';
import Home from './Pages/Home';
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Sign/>}/>
      <Route path="/home" element={
        <div className="App">
    <Header/>
    <TinderCards/>
    <SwipeButtons/>
    </div>
      }/>
      <Route path="/profileC" element={
        <div className="App">
    {/* <Header/> */}
    <ProfileC/>
    </div>

      }/>
      <Route path="/app/onboarding" element={
        <div className="App">
         {/* <Header/> */}
    <Profile/>
    </div>

      }/>
      <Route path="/app" element=
      {
        <div className='App'>
          <Header/>
          <ProfileForward/>
        </div>
      }/>
      <Route path="/profile" element={
        <div className="App">
    {/* <Header/> */}
    <Profile/>
    </div>

      }/>
      <Route path="/editinfo" element={
        <div className="App">
    <Header/>
    <EditInfo/>
    </div>

      }/>
      <Route path="/profilepage" element={
        <div className="App">
        <Header/>
        <Home/>
        </div>    
      }/>
      <Route path="/settings" element={
        <div className="App">
    <Header/>
    <Setting/>
    </div>

      }/>
      <Route path="/chats" element={

   <div className="App">
   <Header/>
   <Chats/>
   </div>
}/>
<Route path="/chats/matches" element={

<div className="App">
<Header/>
<Matches/>
</div>
}/>
    </Routes>
    </>
  );
}

export default App;
