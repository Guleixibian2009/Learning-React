import React from 'react';
import { Spinner } from './common.js'
export class UsrAvatar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            usrname: this.props.name,
            avatarLink: `http://${window.location.host}/avatar/${this.props.name}.png`,
            gotAvatar: false
        }
    }

    componentDidMount(){
        var xhr = new XMLHttpRequest();
        const component = this;
        xhr.onloadend = function(){
            if (xhr.status === 200 && xhr.readyState === 4)  {
                component.setState({
                    gotAvatar: true
                });
            } else {
                component.setState({
                    gotAvatar: false
                });
            }
        }
        xhr.open("GET", this.state.avatarLink);
        xhr.setRequestHeader("Accept", "image/png");
        xhr.send();
    }

    render() {
        if (this.state.gotAvatar) {
            return <img src={this.state.avatarLink} alt={this.state.usrname} height="32px" width="32px" style={{borderRadius: "50%", marginRight: "5px", display: "inline-block"}} />
        } else {
            return <Spinner outerHeight="32px" innerHeight="18px" />
        }
    }
}

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
            <div className='ps-5'>
                <Comment name="Gulei" />
                <Comment name="GitHub" />
                <Comment name="Someone else" />
            </div>
        )
    }
}