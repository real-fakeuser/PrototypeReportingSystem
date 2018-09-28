import React from 'react'
import PropTypes from 'prop-types'
import './listItem.scss'

const propTypes = {
    titleString: PropTypes.string,
    description: PropTypes.string,
    badgeText: PropTypes.string


};

const defaultProps = {
};





export default class HistoryListItem extends React.Component {
    constructor(props) {
        super();
        this.props = props;
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
                className="ListItem"
            >
                <div className="ListItem__head">
                    <div className="ListItem__Title">
                        <p className="ListItem__Title--headline">{this.props.titleString}</p>
                        <p className="ListItem__Title--description">{this.props.description}</p>
                    </div>
                    <i className='badge badgeRight'>{this.props.badgeText}</i>
                </div>
            </div>
        );
    }
}


HistoryListItem.propTypes = propTypes;
HistoryListItem.defaultProps = defaultProps;