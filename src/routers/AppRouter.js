import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
/* import { Navbar } from '../components/ui/Navbar'; */
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouters } from './DashboardRouters';
import { AuthContext } from '../auth/AuthContext';


export const AppRouter = () => {

    const { user } = useContext( AuthContext )

    return (
        <Router>
            <div>
                {/* <Navbar /> */}
    
           
                <Switch>
                    <PublicRoute
                        exact path= "/login" 
                        component = { LoginScreen }
                        estaAutenticado = { user.logged } 
                    />
                    
                    <PrivateRoute
                        path= "/"
                        component = {  DashboardRouters  }
                        estaAutenticado = { user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
