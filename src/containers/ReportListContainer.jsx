import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { PersonFinder } from 'chayns-components';
import { addReport } from '../actions/reportForm';
import { Button, ChooseButton } from 'chayns-components';
import { FileUpload } from 'chayns-components';
import './ReportListContainer.scss';
import 'chayns-components/lib/react-chayns-upload/index.css';
import { SelectList, SelectListItem } from 'chayns-components';
import 'chayns-components/lib/react-chayns-selectlist/index.css';
import { Input } from 'chayns-components';
import { ContextMenu } from 'chayns-components';
import 'chayns-components/lib/react-chayns-contextmenu/index.css';
import { ScrollView } from 'chayns-components';
import { Checkbox } from 'chayns-components';
import 'chayns-components/lib/react-chayns-scrollview/index.css';
import { Accordion } from 'chayns-components';
import { SelectButton } from 'chayns-components';



const ReportListWrapper = ({ showList }) => (
    <div>
        <link rel="stylesheet" href="//chayns-res.tobit.com/API/V3.1/css/chayns.min.css"></link>
        <script src="https://chayns-res.tobit.com/API/V3.1/js/chayns.min.js"></script>
        <link type="text/css" rel="stylesheet" charSet="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"></link>
        <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link type="text/css" rel="stylesheet" href="//https://design.chayns.net/1669229"></link>

        <div className="descr fontRoboto">
<div>
               

<div className="accordion accordion--open" data-group="2">
    <div className="accordion__head">
        <div className="left flexH fullwidth accordion--trigger">
            <div>Reports hoher Priorität
            </div>
        </div>
        <div className="right badge"  style={{'backgroundColor':'red', 'color':'white'}}>
            1
        </div>
    </div>
    <div className="accordion__body">
    <div className="accordion__content"  style={{'marginLeft':'#E71E28'}}>



                        <div className="accordion accordion--wrapped showProjectList" data-group="4">
                            <div className="accordion__head">
                                <div className="accordion--trigger">
                                    <div className="headerText">
                                        <div className="headline">Ausfall Kaffeemaschine</div>
                                        <div className="description">Bamboo Ahaus</div>
                                    </div>
                                </div>
                                <div className="right" style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                    <div className="badge accordion--trigger" style={{ 'backgroundColor': '#F1C141', 'color': 'black' }}>16 Min.</div>
                                    <div className='contextMenu'>
                                    <ContextMenu
                                                x={100}
                                                y={100}
                                                hide={false}
                                                items={[{
                                                    className: 'fa fa-plus',
                                                    text: 'Hinzufügen'
                                                    
                                                }]}
                                                onLayerClick={()=>console.log('hide')}
                                            />


                                    </div>
                                </div>
                            </div>



                            <div className="accordion__body">
                                <div className="accordion__content">

                                    <div className='title '>
                                        <div className='titleimage2'>
                                        </div>
                                    </div>


                                    <div style={{ 'marginTop': '10px' }}>
                                        <div className="accordion accordion--open showProject" data-group="2" style={{ 'marginBottom': '0px' }}>
                                            <div className="accordion__head accordion--trigger">
                                                <div className='test123 accordion--trigger'>
                                                    Bearbeiter
                                            </div>
                                            </div>
                                            <div className="accordion__body">
                                                <div className="accordion__content" style={{ 'marginLeft': '-10px', 'marginBottom': '0px' }}>
                                                    <div className="receiver-input-box">
                                                        <div className="receiver-input chayns__border-color--40 receiver-input--dark">
                                                            <div className="receiver-input chayns__border-color--40 receiver-input--dark">
                                                                <div className="flexH">
                                                                    <div className="chosen-member">
                                                                        <div className="chosen-member__content chayns__background-color--25 chosen-member__content--dark">
                                                                            <span className="chosen-member__content__name">
                                                                                Hans
                                                            </span>

                                                                            <button className="close">X</button>                                                                        </div>
                                                                    </div>
                                                                    <div className="chosen-member">
                                                                        <div className="chosen-member__content chayns__background-color--25 chosen-member__content--dark">
                                                                            <span className="chosen-member__content__name">
                                                                                Georg
                                                            </span>
                                                                            <button className="close">X</button>                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="input-box">
                                                                <input type="text" className="input receiver-input-field" style={{ 'width': '100%', 'borderStyle': 'solid', 'height': '28px' }} value="" placeholder="">
                                                                </input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className=''>
                                    <div className='flexR FormRow'>
                
<div className="flex__left">Abteilung</div>
<div>
<SelectButton
label="Ändern"
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



                                    
                                    </div>


                                    </div>
                                    <div>
                                    <Accordion head={<div className='AccordionHead accordion--trigger'>Kontakt</div>}
                                                
                                                defaultOpened={false} isWrapped>
                                        <div className="accordion__content">
                                            <div>
                                                <a>Hans Mustername</a><br/>
                                                <a>Tobit.Software</a><br/>
                                                <a>+49 4568 465 789</a><br/>
                                                <a>+49 6633 453 915</a><br/>
                                                <a>Hans.Mustername@gmx.de</a><br/>


                                            </div>


                                        </div>
                                    </Accordion>
                                    </div>


                            </div>
                        </div>









    </div>
    
    </div>
</div>


<div className="accordion" data-group="2">
    <div className="accordion__head">
        <div className="left flexH fullwidth accordion--trigger">
            <div>Offene Reports
            </div>
        </div>
        <div className="right badge">
            1
        </div>
    </div>
    <div className="accordion__body">
        <div className="accordion__content" style={{'marginLeft':'0'}}>
            <p>Ein Accordion kann über das badge besonders gekennzeichnet werden. Benutze es jedoch nur, wenn die Information auch auf den ersten Blick sichtbar sein soll.
            </p>
        </div>
    </div>
</div>


<div className="accordion " data-group="2">
    <div className="accordion__head">
        <div className="left flexH fullwidth accordion--trigger">
            <div>Angenommene Reports
            </div>
        </div>
        <div className="right badge">
            2
        </div>
    </div>
    <div className="accordion__body">
        <div className="accordion__content"  style={{'marginLeft':'0'}}>
            <p>Ein Accordion kann über das badge besonders gekennzeichnet werden. Benutze es jedoch nur, wenn die Information auch auf den ersten Blick sichtbar sein soll.
            </p>
        </div>
    </div>
</div>


<div className="accordion " data-group="2">
    <div className="accordion__head">
        <div className="left flexH fullwidth accordion--trigger">
            <div>Deine Reports
            </div>
        </div>
        <div className="right badge">
            1
        </div>
    </div>
    <div className="accordion__body">
        <div className="accordion__content"  style={{'marginLeft':'0'}}>
            <p>Ein Accordion kann über das badge besonders gekennzeichnet werden. Benutze es jedoch nur, wenn die Information auch auf den ersten Blick sichtbar sein soll.
            </p>
        </div>
    </div>
</div>







            </div>
        </div >

    </div >




);

ReportListWrapper.propTypes = {
    showList: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    showList: user => dispatch(showList(fromJS(user)))
});

export default connect(
    undefined,
    mapDispatchToProps
)(ReportListWrapper);
