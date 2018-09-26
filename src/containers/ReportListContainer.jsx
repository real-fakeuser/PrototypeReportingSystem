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


const ReportListWrapper = ({ showList }) => (
    <div>
        <link rel="stylesheet" href="//chayns-res.tobit.com/API/V3.1/css/chayns.min.css"></link>
        <script src="https://chayns-res.tobit.com/API/V3.1/js/chayns.min.js"></script>
        <link type="text/css" rel="stylesheet" charSet="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"></link>
        <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link type="text/css" rel="stylesheet" href="//https://design.chayns.net/1669229"></link>

        <div className="descr fontRoboto">
            <div>
                <Accordion head="Deine Reports" defaultOpened={true}>
                    <div className="accordion__content">


                        <div className="accordion accordion--wrapped showProjectList" data-group="4">
                            <div className="accordion__head">
                                <div className="accordion--trigger">
                                    <div className="headerText">
                                        <div className="headline">Defekter Monitor</div>
                                        <div className="description">Max Mustermann</div>
                                    </div>
                                </div>
                                <div className="right" style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                    <div className="badge accordion--trigger" style={{ 'backgroundColor': 'greenyellow', 'color': 'black' }}>In Bearbeitung</div>
                                </div>
                            </div>
                            <div className="accordion__body">
                                <div className="accordion__content">
                                    <div className='title'>
                                        <div className='titleimage'>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="accordion accordion--wrapped showProjectList" data-group="4">
                            <div className="accordion__head">
                                <div className="accordion--trigger">
                                    <div className="headerText">
                                        <div className="headline">Defekter Monitor</div>
                                        <div className="description">Max Mustermann</div>
                                    </div>
                                </div>
                                <div className="right" style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                    <div className="badge accordion--trigger" style={{ 'backgroundColor': 'greenyellow', 'color': 'black' }}>In Bearbeitung</div>
                                </div>
                            </div>
                            <div className="accordion__body">
                                <div className="accordion__content">
                                    <div className='title'>
                                        <div className='titleimage2'>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>








                    </div>
                </Accordion>


            </div>
        </div>

    </div>




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