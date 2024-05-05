// App.jsx
import React, { useState } from 'react';
import SignupForm from './component/Register';
import SigninForm from './component/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/Aboutt'
import Lab from './component/Library/Library'
import Data from './component/Library/Data';
import Previousyear3 from './component/Library/PYQ/Previousyear3';
import Previousyear4 from './component/Library/PYQ/Previousyear4';
import Previousyear5 from './component/Library/PYQ/Previousyear5';
import Previousyear6 from './component/Library/PYQ/Previousyear6';
import Previousyear7_8 from './component/Library/PYQ/Previousyear7&8';
import Roadmap from './component/Library/Roadmap';
import Notes from './component/Library/Notes';
import Sem_3 from './component/Library/Academic/Sem_3';
import Sem_4 from './component/Library/Academic/Sem_4';
import Sem_5 from './component/Library/Academic/Sem_5';
import Error from './component/Error';
import Profile from './component/Profile'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Function to update login status
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Detecting current route
  const location = useLocation();

  // Conditionally render Navbar based on login status
  const renderNavbar = () => {
    if (isLoggedIn) {
      return <Navbar />;
    }
    return null;
  };
  const renderFooter = () => {
    if (isLoggedIn) {
      return <Footer />;
    }
    return null;
  };

  return (
    <div>
      {/* Render Navbar only if logged in */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<SignupForm onLogin={handleLogin} />} />
        <Route path='/login' element={<SigninForm onLogin={handleLogin} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/library' element={<Lab />} >
          <Route path='/library/syllabus' element={<Data />} />
          <Route path='/library/PYQ/sem-3' element={<Previousyear3 />} />
          <Route path='/library/PYQ/sem-4' element={<Previousyear4 />} />
          <Route path='/library/PYQ/sem-5' element={<Previousyear5 />} />
          <Route path='/library/PYQ/sem-6' element={<Previousyear6 />} />
          <Route path='/library/PYQ/sem-7/8' element={<Previousyear7_8 />} />
          <Route path='/library/radmaps' element={<Roadmap />} />
          <Route path='/library/tech-notes' element={<Notes />} />
          <Route path='/library/LORDS/sem-3' element={<Sem_3 />} />
          <Route path='/library/LORDS/sem-4' element={<Sem_4 />} />
          <Route path='/library/LORDS/sem-5' element={<Sem_5 />} />
        </Route>
        <Route path='*' element={<Error/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      {/* Render Footer only if logged in */}
      <Footer />
    </div>
  );
};

export default App;
