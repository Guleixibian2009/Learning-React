import React from 'react';

import {UsrAvatar} from './common.js'



export class Comment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            usrname : this.props.name,
            comment : ""
        }
    }

    componentDidMount(props) {
        var comment = `This is comment from ${this.state.usrname}!`
        this.setState({
            comment: comment
        });
    }

    getTime(){
        return new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }

    render() {
        return (
            <div className='border border-1 bg-white p-3'>
                <div className='d-flex flex-row'>
                    <UsrAvatar name={this.state.usrname} />
                    <span className='d-inline align-self-center'>{this.state.usrname}</span>
                </div>
                <p>{this.state.comment}</p>
                <p className='text-muted'>{this.getTime()}</p>
            </div>
        )
    }
}

export class CommentGroup extends React.Component{
    render() {
        return (
            <div>
                <Comment name="Gulei" />
                <Comment name="GitHub" />
                <Comment name="Someone else" />
            </div>
        )
    }
}