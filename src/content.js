import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddFriend from './pages/addfriend';
import Friends from './pages/friends';
import Help from './pages/help';
import Home from './pages/home';

function Content() {
    return ( 
    <div>
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/friends' element={<Friends></Friends>}></Route>
                <Route path='/help' element={<Help></Help>}></Route>
                <Route path='/addnew' element={<AddFriend></AddFriend>}></Route>
            </Routes>
        </div>
    </div> );
}

export default Content;