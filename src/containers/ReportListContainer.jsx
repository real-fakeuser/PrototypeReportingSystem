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
import ListItem from '../components/ListItem/listItem';



const ReportListWrapper = ({ showList }) => (
    <div>
        <link rel="stylesheet" href="//chayns-res.tobit.com/API/V3.1/css/chayns.min.css"></link>
        <script src="https://chayns-res.tobit.com/API/V3.1/js/chayns.min.js"></script>
        <link type="text/css" rel="stylesheet" charSet="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"></link>
        <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link type="text/css" rel="stylesheet" href="//https://design.chayns.net/1669229"></link>
        <div className="descr fontRoboto">


            <Accordion head='Reports mit hoher Prorität'
                badge='1'
                badgeStyle={{ 'backgroundColor': 'red', 'color': 'white', 'position': 'absolute', 'right': '5px', 'top': '2.5px' }}
                style={{ 'width': '100%' }}
                defaultOpened
            >
                <ListItem
                    titleString="Ausfall Kaffeemaschine"
                    description="Tobit.Software Ausstehend"
                    badgeText="82 Min."
                    isOpen
                />
                <ListItem
                    titleString="Langsame Netzwerkanbindung"
                    description="Bamboo Tobit.Campus Abgeschlossen"
                    badgeText="Gestern"
                />
                <div className='accordion__content'>
                </div>
                <div className="accordion__item">
                </div>
            </Accordion>
            <Accordion head='Offene Reports'
                badge='4'
                badgeStyle={{'position': 'absolute', 'right': '5px', 'top': '2.5px' }}
                style={{ 'width': '100%' }}
            >
                <ListItem
                    titleString="Monitor ausgefallen"
                    description="Tobit.Software Ausstehend"
                    badgeText="Vor 3 Minuten"
                    isOpen
                />
                <ListItem
                    titleString="Telefonie funktioniert nicht"
                    description="TKWY Ahaus Ausstehend"
                    badgeText="Vor 96 Minuten"
                />
                <ListItem
                    titleString="Kaffeemaschine Ausfall"
                    description="Tobit.Labs Ausstehend"
                    badgeText="Vor 136 Minuten"
                />
                <ListItem
                    titleString="WLAN Ausgefallen"
                    description="Cinemy Ahaus Ausstehend"
                    badgeText="Vor 290 Minuten"
                />
                <div className='accordion__content'>
                </div>
                <div className="accordion__item">
                </div>
            </Accordion>
            <Accordion head='Angenommene Reports'
                badge='1'
                badgeStyle={{'position': 'absolute', 'right': '5px', 'top': '2.5px' }}
                style={{ 'width': '100%' }}
            >
                <ListItem
                    titleString="Monitor ausgefallen"
                    description="Tobit.Software Ausstehend"
                    badgeText="Vor 3 Minuten"
                    isOpen
                />
                <ListItem
                    titleString="Telefonie funktioniert nicht"
                    description="TKWY Ahaus Abgeschlossen"
                    badgeText="Gestern"
                />
                <ListItem
                    titleString="Kaffeemaschine Ausfall"
                    description="Tobit.Labs Ausstehend"
                    badgeText="Gestern"
                />
                <ListItem
                    titleString="WLAN Ausgefallen"
                    description="Cinemy Ahaus Ausstehend"
                    badgeText="21.05.2018"
                />
                <div className='accordion__content'>
                </div>
                <div className="accordion__item">
                </div>
            </Accordion>
            <Accordion head='Deine Reports'
                badge='4'
                badgeStyle={{'position': 'absolute', 'right': '5px', 'top': '2.5px' }}
                style={{ 'width': '100%' }}
            >
                <ListItem
                    titleString="Monitor ausgefallen"
                    description="Tobit.Software Ausstehend"
                    badgeText="36 Min."
                    isOpen
                />
                <ListItem
                    titleString="Telefonie funktioniert nicht"
                    description="TKWY Ahaus Abgeschlossen"
                    badgeText="Gestern"
                />
                <ListItem
                    titleString="Kaffeemaschine Ausfall"
                    description="Tobit.Labs Ausstehend"
                    badgeText="Gestern"
                />
                <ListItem
                    titleString="WLAN Ausgefallen"
                    description="Cinemy Ahaus Ausstehend"
                    badgeText="Gestern"
                />
                <div className='accordion__content'>
                </div>
                <div className="accordion__item">
                </div>
            </Accordion>

















            </div>
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
