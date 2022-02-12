import React, {useEffect} from 'react';

import {Route, Routes} from 'react-router-dom';
import Home from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Details from "./pages/details";
import Verify from "./pages/verify";
import Select from "./pages/select";
import {withCropper} from "./components/cropper/CropperDialogProvider";

const App = () => {
    useEffect(() => {
        if(window.location.pathname === '/details' || window.location.pathname === '/'){
            if(!localStorage.getItem('id')){
                window.location.href = '/login'
            }
        }
        if(window.location.pathname === '/login' || window.location.pathname === '/signup'){
            if(localStorage.getItem('id')){
                window.location.href = '/'
            }
        }
    }, [])
  return (
      <React.Fragment>
         <Routes>
             <Route path={'/login'} element={<Login />} />
             <Route path={'/select'} element={<Select />} />
             <Route path={'/verify'} element={<Verify />} />
             <Route path={'/signup'} element={<Signup />} />
             <Route path={'/'} element={<Home />} />
             <Route path={'/details/:id'} element={<Details />} />
         </Routes>
      </React.Fragment>
  );
}

export default App;
