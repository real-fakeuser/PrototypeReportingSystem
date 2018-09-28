import React from 'react'
import PropTypes from 'prop-types'
import './listItem.scss'

const propTypes={
            titleString:    PropTypes.string,
            description:    PropTypes.string,
            isOpen:         PropTypes.bool
            

};

const defaultProps={
};





export default class ListItem extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.className = 'ListItem ListItem--clickable ListItem--accordion';
    }
    _getStatusClass() {
        if(this.props.isOpen){
            return "ListItem ListItem--clickable ListItem--accordion--open";
        }    
        return "ListItem ListItem--clickable ListItem--accordion";
    }
    render = () => {
        this.className = this._getStatusClass();
        return (
            <div className={this.className} >
                    <div className="ListItem__head">
                    <div className="ListItem__Arrow arrow arrow:before ">
                    
                    </div>
                        <div className="ListItem__Title">
                            <p className="ListItem__Title--headline">{this.props.titleString}</p>
                            <p className="ListItem__Title--description">{this.props.description}</p>
                        </div>
                    </div>
                    <div className="ListItem__body">
                    
                    Body Content
                    </div>
            </div>
        );
    }
}


ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
