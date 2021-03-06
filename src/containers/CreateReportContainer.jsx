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
import { SelectButton } from 'chayns-components';
import { Accordion } from 'chayns-components';



const ReportFormWrapper = ({ addReport }) => (
    <div>
        <link rel="stylesheet" href="//chayns-res.tobit.com/API/V3.1/css/chayns.min.css"></link>
        <script src="https://chayns-res.tobit.com/API/V3.1/js/chayns.min.js"></script>
        <link type="text/css" rel="stylesheet" charSet="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"></link>
        <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link type="text/css" rel="stylesheet" href="//https://design.chayns.net/1669229"></link>
        <div className="descr fontRoboto">
        <Accordion head='Report erstellen'>
            <div className='accordion__content'>
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

                <div className='FormRow inputRow flexbox'>
                    <Input
                        style={{ width: '100%' }}
                        placeholder="Beschreibung (optional)"
                        onInput={(text) => { console.log('There is some new input. Check the new text: ', text); }}
                        onBlur={(text) => { console.log('The input losted its focus, the final input is: ', text); }}
                        onChange={(result) => {

                            console.log(result);

                        }}
                    />
                </div>

                <div className='FormRow flexbox'>
                    <FileUpload
                        style={{ width: '100%' }}
                        multiple={false}
                        type="image"
                        upload
                        onUpload={(files, validFiles) => {
                            console.log(files);
                        }}
                    />
                </div>


                <div className='flexR FormRow'>

                
                    <div className="flex__left">Wo bist Du gerade?</div>
                    <div>
                    <SelectButton
                    label="Tobit.Campus"
                    list={[{
                        id: '0', //this is the listKey
                        name: 'Bamboo Ahaus', //this ist the listValue (shown value inside the dialog)
                        price: '4.00' //additional data that will be returned after selection
                    }, {
                        id: '1',
                        name: 'Next Ahaus',
                        price: '4.50'
                    }, {
                        id: '2',
                        name: 'Tobit.Software',
                        price: '4.50'
                    }, {
                        id: '3',
                        name: 'Tobit.Campus',
                        price: '5.00'
                    }]}
                    onSelect={(value) => { console.log(value) }}
                    listKey="id"
                    listValue="name"
                />
                    </div>
                </div>
                <div className='flexR FormRow'>
                    <div className="flex__left">Abteilung</div>
                    <div>
                    <SelectButton
                    label="Wählen"
                    list={[{
                        id: '0', //this is the listKey
                        name: 'Facility Management', //this ist the listValue (shown value inside the dialog)
                        price: '4.00' //additional data that will be returned after selection
                    }, {
                        id: '1',
                        name: 'Administration',
                        price: '4.50'
                    }, {
                        id: '2',
                        name: 'Personalmanagement',
                        price: '4.50'
                    }, {
                        id: '3',
                        name: 'Küche',
                        price: '5.00'
                    }]}
                    onSelect={(value) => { console.log(value) }}
                    listKey="id"
                    listValue="name"
                />
                    </div>
                </div>



                <div className='input_wrapper FormRow flexbox' id='Checkbox' style={{'marginBottom':'-2px'}}>
                    <Checkbox
                        onChange={(value) => { console.log(value); }}
                        disabled={false}
                    >
                        Schwerwiegende Störung
                    </Checkbox>
                </div>

                <div className='flexH' style={{'marginBottom':'8px', 'marginTop':'10px'}}>
                <div style={{ width: '100%', 'whiteSpace':'nowrap'}}></div>
                    <div className='flexbox' style={{'whiteSpace':'nowrap'}}>
                        <Button
                            disabled={false}
                            onClick={function (event) {
                                console.log(event);
                            }}
                        >
                            Report abschicken
                    </Button>
                    </div>
                    <div style={{ width: '100%', 'whiteSpace':'nowrap'}}></div>
                </div>


            </div>            </div>
        </Accordion>




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
