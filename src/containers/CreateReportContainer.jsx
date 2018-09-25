import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { PersonFinder } from 'chayns-components';
import { addReport } from '../actions/reportForm';
import { Button, ChooseButton } from 'chayns-components';
import { Input } from 'chayns-components';

const ReportFormWrapper = ({ addReport }) => (

<Input
placeholder="Looking for 3 lowercase e's"
onInput={ (text) => { console.log('There is some new input. Check the new text: ', text); }}
onBlur={ (text) => { console.log('The input losted its focus, the final input is: ', text); }}
onChange={(result) => {

    console.log(result);

}}

/>

);

ReportFormWrapper.propTypes = {
    addReport: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    addReport: user => dispatch(addReport(fromJS(user)))
});

export default connect(
    undefined,
    mapDispatchToProps
)(ReportFormWrapper);
