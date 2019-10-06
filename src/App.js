import React from 'react';

import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Checkout from './Pages/Checkout';
import Invoice from './Pages/Invoice';

const App = () => {
    return (
        <>
            <NavBar />
            <Route path='/' exact component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/checkout' component={Checkout} />
            <Route path ='/invoice' component={Invoice} />
        </>
    )
}

export default App;