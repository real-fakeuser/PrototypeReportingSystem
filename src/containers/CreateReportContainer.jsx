import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { PersonFinder } from 'chayns-components';
import { addReport } from '../actions/reportForm';
import { Button, ChooseButton } from 'chayns-components';
import { FileUpload } from 'chayns-components';
import './CreateReportContainer.scss';
import 'chayns-components/lib/react-chayns-upload/index.css';
import { SelectList, SelectListItem } from 'chayns-components';
import 'chayns-components/lib/react-chayns-selectlist/index.css';
import { Input } from 'chayns-components';
import { ContextMenu } from 'chayns-components';
import 'chayns-components/lib/react-chayns-contextmenu/index.css';
import { ScrollView } from 'chayns-components';
import { Checkbox } from 'chayns-components';

import 'chayns-components/lib/react-chayns-scrollview/index.css';


const ReportFormWrapper = ({ addReport }) => (
    <div>
        <link rel="stylesheet" href="//chayns-res.tobit.com/API/V3.1/css/chayns.min.css"></link>
        <script src="https://chayns-res.tobit.com/API/V3.1/js/chayns.min.js"></script>
        <link type="text/css" rel="stylesheet" charSet="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"></link>
        <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link type="text/css" rel="stylesheet" href="//https://design.chayns.net/1669229"></link>
        <div className="content__card descr fontRoboto">
            <div>
                <h2>Erstelle Hier Deinen Fehler-Report</h2>
            </div>
            <div className='flex'>

                <div className='FormRow inputRow flexbox'>
                    <Input
                        style={{ width: '100%' }}
                        placeholder="Worum geht es?"
                        onInput={(text) => { console.log('There is some new input. Check the new text: ', text); }}
                        onBlur={(text) => { console.log('The input losted its focus, the final input is: ', text); }}
                        onChange={(result) => {

                            console.log(result);

                        }}
                    />
                </div>
                <div className='input_wrapper FormRow flexbox'>
                    <div className='select_wrapper'>
                        <select className='select'>
                            <option value="volvo">Bamboo Ahaus</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>

                        </select>
                    </div>
                </div>

                <div className='input_wrapper FormRow flexbox'>
                    <div className='select_wrapper'>
                        <select className='select'>
                            <option value="volvo">Facility Management</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>

                        </select>
                    </div>
                </div>

                <div className='input_wrapper FormRow flexbox' id='Checkbox'>
                    <Checkbox
                        onChange={(value) => { console.log(value); }}
                        disabled={false}
                    >
                        Schwerwiegende Störung
                    </Checkbox>
                </div>
                <div className='FormRow inputRow flexbox'>
                    <Input
                        style={{ width: '100%' }}
                        placeholder="Wie erreichen wir Dich am schnellsten?"
                        onInput={(text) => { console.log('There is some new input. Check the new text: ', text); }}
                        onBlur={(text) => { console.log('The input losted its focus, the final input is: ', text); }}
                        onChange={(result) => {

                            console.log(result);

                        }}
                    />
                </div>
                <div className='FormRow inputRow flexbox'>
                    <Input
                        style={{ width: '100%' }}
                        placeholder="Worum geht es?"
                        onInput={(text) => { console.log('There is some new input. Check the new text: ', text); }}
                        onBlur={(text) => { console.log('The input losted its focus, the final input is: ', text); }}
                        onChange={(result) => {

                            console.log(result);

                        }}
                    />
                </div>
                <div className='FormRow flexbox'>
                    <a href="#">Hast Du schon unter Lösungen für häufige Fragen geschaut?</a>
                </div>
                <div className='FormRow flexbox'>
                    <FileUpload
                        style={{ width: '100%' }}
                        multiple={false}
                        type="image"
                        onChange={(files, validFiles) => {
                            console.log(`You have selected ${files.length} files of which ${validFiles.length} are valid`);
                        }}
                    />

                </div>


            </div>



        </div>

        <FileUpload
            multiple={false}
            type="image"
            onChange={(files, validFiles) => {
                console.log(`You have selected ${files.length} files of which ${validFiles.length} are valid`);
            }}
        />

        <div>
            <div className='flexbox'>
                <div className='inline'>
                    <a>Standort: </a>
                </div>
                <div className='input_wrapper inline'>
                    <div className='select_wrapper'>
                        <select><option>Tag</option><option>Woche</option><option>Monat</option><option>Quartal</option></select>
                    </div>
                </div>
            </div>
            <div className='flexbox'>
                <div className='inline'>
                    <a>Fachbereich: </a>
                </div>
                <div className='input_wrapper inline'>
                    <div className='select_wrapper'>
                        <select><option>Tag</option><option>Woche</option><option>Monat</option><option>Quartal</option></select>
                    </div>
                </div>
            </div>
            <div className='flexbox'>
                <div className='inline'>
                    <a>Hohe Priorität: </a>
                </div>
                <div className='inline'>
                    <Checkbox
                        label="This is a toggle button"
                        toggleButton={true}
                        onChange={(value) => { console.log(value); }}
                    />
                </div>
            </div>
        </div>




    </div>
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
