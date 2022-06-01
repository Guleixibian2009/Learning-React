import React from 'react';
import {Spinner} from './common'

export class CardImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            direction: this.props.direction,
            height: '100%',
            width: '100%'
        }
    }

    componentDidMount(){
        if (this.state.direction === 'hor'){
            this.setState({
                height: '50%',
            });
        } else if (this.state.direction === 'ver'){
            this.setState({
                width: '50%',
            });
        } else {
            throw new Error(`CardImage: direction ${this.state.direction} not found.npm`)
        }
    }
}