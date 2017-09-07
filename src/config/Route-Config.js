import React from 'react';
import {Router,Route,IndexRoute,Redirect,hashHistory} from 'react-router';
import AppContainer from '../containers/AppContainers';
import HomeContainer from '../containers/HomeContainer';
import MovieContainer from "../containers/MovieContainer"
import SpotContainer from "../containers/SpotContainer"
import MusicContainer from "../containers/MusicContainer"
import BookContainer from "../containers/BookContainer"


const MovieDetailContainer = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/MovieDetaiContainer').default)
    },'MovieDetailContainer')
}
const RootRouter=(
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path="index" component={HomeContainer}/>
            <Route path="movie" component={MovieContainer}/>
            <Route path="movie/:id" getComponent={MovieDetailContainer}/>
            <Route path="spot"  component={SpotContainer}/>
            <Route path="music" component={MusicContainer}/>
            <Route path="book" component={BookContainer}/>
        </Route>
    </Router>
)
export default RootRouter;