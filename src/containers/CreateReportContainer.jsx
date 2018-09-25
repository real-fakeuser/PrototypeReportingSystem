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
import 'chayns-components/lib/react-chayns-scrollview/index.css';


const ReportFormWrapper = ({ addReport }) => (
    <div>

        <h2>Erstelle Hier Deinen Fehler-Report</h2>
        <FileUpload
            multiple={false}
            type="image"
            onChange={(files, validFiles) => {
                console.log(`You have selected ${files.length} files of which ${validFiles.length} are valid`);
            }}
        />
        <Input

            placeholder="Worum geht es?"
            onInput={(text) => { console.log('There is some new input. Check the new text: ', text); }}
            onBlur={(text) => { console.log('The input losted its focus, the final input is: ', text); }}
            onChange={(result) => {

                console.log(result);

            }}
        />
        <div>
            <a>Standort: </a>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <div className='input_wrapper'>
            <div className='select_wrapper'>
            <select><option>Tag</option><option>Woche</option><option>Monat</option><option>Quartal</option></select>
            </div>
            </div>

            <div className='select_wrapper'><select><option>Tag</option><option>Woche</option><option>Monat</option><option>Quartal</option></select></div>

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
