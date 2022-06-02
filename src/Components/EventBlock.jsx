import React, {Component} from 'react';
import getDate from '../utils';

class EventBlock extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div>
                <span className='eventBlockDate'>{this.props.date}</span>
                <p className='eventBlockDescription'>{this.props.description}</p>
            </div>
        )
    }

    
}

export default EventBlock;