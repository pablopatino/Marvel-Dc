import React, { Fragment } from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'

import { MarvelScreen } from '../components/marvel/MarveScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRouters = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>

                    <Route exact path="/marvel" component = { MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component = { HeroScreen } />
                    <Route exact path="/dc" component = { DcScreen } />
                    <Route exact path="/search" component = { SearchScreen } />

                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}
