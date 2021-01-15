import React from 'react'
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
        estaAutenticado,
        component: Component,
        ...rest
    }) => {
    

    localStorage.setItem('lastPath', rest.location.pathname)    

    return (

        <Route { ...rest }
            component = { (props) => (
                ( estaAutenticado )
                    ? (<Component { ...props } />)
                    : ( <Redirect to="/login" /> )
            )}
        
        
        />
            
    
    )
}

PrivateRoute.propTypes = {
    estaAutenticado: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
