import React from 'react'
import PropTypes from 'prop-types'
import './listItem.scss'

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
                onClick={() => {
                    if (this.itemHead.current.classList.contains("ListItem--accordion--open"))
                        this.itemHead.current.classList.remove("ListItem--accordion--open");
                    else
                        this.itemHead.current.classList.add("ListItem--accordion--open");
                }}
                ref={this.itemHead}
                className="ListItem ListItem--accordion"
            >
                <div className="ListItem__head">
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

                        <div className='flexR FormRow'>

                            {
                                this.props.accordionBody
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;