import React from 'react'
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({ 
    estaAutenticado,
    component: Component,
    ...rest }) => {

        
    return (
      
        <Route { ...rest }
            component = { (props) => (
                ( !estaAutenticado )
                    ? (<Component { ...props } />)
                    : ( <Redirect to="/" /> )
            )}
        
        
        />
    )
}

PublicRoute.propTypes = {
    estaAutenticado: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
