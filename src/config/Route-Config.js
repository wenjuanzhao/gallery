import React from 'react';
import {Router,Route,IndexRoute,Redirect,hashHistory} from 'react-router';
import AppContainer from '../containers/AppContainers';
import HomeContainer from '../containers/HomeContainer';
import MovieContainer from "../containers/MovieContainer"
import SpotContainer from "../containers/SpotContainer"
import MusicContainer from "../containers/MusicContainer"
import BookContainer from "../containers/BookContainer"
import MovieDetaiContainer from "../containers/MovieDetaiContainer"
const RootRouter=(
    <Router history={hashHistory}>
        <Route path="/" components={AppContainer}>
            <IndexRoute components={HomeContainer}/>
            <Route path="index" components={HomeContainer}/>
            <Route path="movie" components={MovieContainer}/>
            <Route path="movie/:id" components={MovieDetaiContainer}/>
            <Route path="spot"  components={SpotContainer}/>
            <Route path="music" components={MusicContainer}/>
            <Route path="book" components={BookContainer}/>
        </Route>
    </Router>
)
export default RootRouter;