import React from 'react'
import PropTypes from 'prop-types'
import './listItem.scss'
import { SelectButton } from 'chayns-components';
import { Accordion } from 'chayns-components';
import HistoryListItem from '../HistoryList/listItem';

const propTypes = {
    titleString: PropTypes.string,
    description: PropTypes.string,
    isOpen: PropTypes.bool,
    badgeText: PropTypes.string,
    accordionBody: PropTypes.object

};

const defaultProps = {
};





export default class ListItem extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.className = '';
        this.itemHead = React.createRef();

    }

    componentDidMount() {
        if (this.props.isOpen) {
            this.itemHead.current.classList.add("ListItem--accordion--open");
        }
    }










    render = () => {
        return (
            <div
                ref={this.itemHead}
                className="ListItem ListItem--accordion"
            >
                <div className="ListItem__head"
                    onClick={() => {
                        if (this.itemHead.current.classList.contains("ListItem--accordion--open"))
                            this.itemHead.current.classList.remove("ListItem--accordion--open");
                        else
                            this.itemHead.current.classList.add("ListItem--accordion--open");
                    }}

                >
                    <div className="ListItem__Arrow">
                        <i className="fa fa-chevron-right" />
                    </div>
                    <div className="ListItem__Title">
                        <p className="ListItem__Title--headline">{this.props.titleString}</p>
                        <p className="ListItem__Title--description">{this.props.description}</p>
                    </div>
                    <i className='badge badgeRight'>{this.props.badgeText}</i>
                </div>
                <div className="ListItem__body">
                    <div className="ListItem__Content">





                        <div>
                            <div className='flexR FormRow'>
                                <div className="flex__left">Ersteller</div>
                                <div>
                                    <a>Max Mustermann</a>
                                </div>
                            </div>
                        </div>

                        <div>
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
                            <div className='title '>
                                <div className='titleimage2'>
                                </div>
                            </div>
                            <div>
                                Hier steht ein Beschriebungstext...Hier steht ein Beschriebungstext...Hier steht ein Beschriebungstext...Hier steht ein Beschriebungstext...Hier steht ein Beschriebungstext...Hier steht ein Beschriebungstext...
                            </div>




                            <Accordion head='Verlauf'
                                style={{ 'marginBottom': '5px', 'borderBottom': 'none'}}
                                defaultOpened={false}>
                                <div className="accordion__content" style={{ 'marginLeft': '0', 'paddingLeft': '9px', 'paddingTop': '10px', 'paddingBottom': '9px' }}>
                                    <div>
                                        <HistoryListItem
                                            titleString="Günter Neu"
                                            description="Übernahm den Auftrag"
                                            badgeText="Vor 23 Min"
                                        />
                                        <HistoryListItem
                                            titleString="Gerd Albers"
                                            description="Wies den Auftrag der Gruppe Junior.Team zu"
                                            badgeText="Vor 70 Min"
                                        />
                                        <HistoryListItem
                                            titleString="Gerd Albers"
                                            description="Übernahm den Report"
                                            badgeText="Vor 72 Min"
                                        />
                                        <HistoryListItem
                                            titleString="Max Mustermann"
                                            description="Erstellte Report"
                                            badgeText="Vor 82 Min"
                                        />





                                    </div>
                                </div>
                            </Accordion>












































                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;