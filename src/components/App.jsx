import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './intro/Intro';
import CreateReportContainer from '../containers/CreateReportContainer';
import UserListContainer from '../containers/UserListContainer';

const App = () => (
    <div>
        <Intro />
        <CreateReportContainer />
    </div>
);

export default hot(module)(App);
