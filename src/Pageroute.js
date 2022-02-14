import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import Login from './Login';
import Avatar from './Avatar';
import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import Donate from './Donate';
import Notification  from './Notification';

export default function Main() {
    return (

      <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="avatar" element={<Avatar />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="donate" element={<Donate />} />
            <Route path="notifications" element={<Notification />} />
            </Routes>
  </Router>
    );
  }