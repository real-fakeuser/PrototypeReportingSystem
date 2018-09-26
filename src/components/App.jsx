import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './intro/Intro';
import CreateReportContainer from '../containers/CreateReportContainer';
import UserListContainer from '../containers/UserListContainer';
import ReportListContainer from '../containers/ReportListContainer';
const App = () => (
    <div>
        <Intro />
        <CreateReportContainer />
        <ReportListContainer />
    </div>
);

export default hot(module)(App);
