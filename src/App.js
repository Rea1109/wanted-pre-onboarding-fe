import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Feeds from './pages/Feeds';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Feeds />} />
        </Routes>
    );
}

export default App;
