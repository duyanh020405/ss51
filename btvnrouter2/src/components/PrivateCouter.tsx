import React, { useState } from 'react';
import Login from './Login';
import Account from './Acount';
import { Route, Routes } from 'react-router-dom';

export default function PrivateCounter() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <div>
            <Routes>
                <Route path='/' element={isLoggedIn ? <Account /> : <Login />} />
            </Routes>
        </div>
    );
}
