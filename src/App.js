import './App.css';
import { useState, useEffect } from 'react';
import Heading from './components/Heading';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Auth from './components/Auth';

function App() {
  // const [userData, setUserData] = useState([])

  // useEffect(() => {
  //   getUsersData()
  // },[]);

  // const getUsersData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   console.log(data);
  //   setUserData(data)
  // }

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
          <Auth>
            <Home />
          </Auth>
        } />
        <Route path="/aboutus" element={
          <Auth>
            <AboutUs />
          </Auth>
        } />
        <Route path="/*" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
