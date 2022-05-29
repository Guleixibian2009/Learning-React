import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'

class Input extends React.Component{
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

class Hello extends React.Component{
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

class Main extends React.Component{
    render(props) {
        return (
            <main className='py-5 px-3 px-md-5'>
                <h1>Hi There! Welcome to the <code>UI-Example</code> project.</h1>
                <hr />
                <div>
                    <h2>What's you name?</h2>
                    <Input id="nameInput" type="username" />
                    <Hello />
                </div>
                
            </main>
        )
    }
}

// ================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
