import React from 'react';
export class Input extends React.Component{
    constructor(props) {
        super(props);
        if (props.type === "username"){
            this.state = {
                type: "input"
            }
        }
    }

    handleInput(){
        window.username = document.getElementById('username').value
    }

    render() {
        return (
            <input
                id='username'
                type={this.state.type}
                placeholder="Enter you name:"
                onChange={() => this.handleInput()}
            ></input>
        )
    }
}

export class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: ""};
    }

    setName() {
        this.setState({
            username: document.getElementById('username').value
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            ()=>this.setName(), 
        100);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (this.state.username !== ""){
            return (
                <p>Hello, {this.state.username}!</p>
            )
        } else {
            return (
                <p>Hello, world!</p>
            )
        }
        
    }
}