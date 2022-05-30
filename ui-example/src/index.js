import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        return { hasError: true };  
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <h2 className='text-warning'>Something went wrong here!</h2>
            );
        }

        return this.props.children; 
    }
  }

// 1. What's your name?
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


// 2. Comments
class UsrAvatar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            usrname: this.props.name,
            avatarLink: `http://localhost:3000/avatar/${this.props.name}.png`
        }
    }

    render() {
        return (
            <img 
                src={this.state.avatarLink}
                alt={this.state.usrname}
                height="32px"
                width="32px"
                style={{borderRadius: "50%"}}
            />
        )
    }
}

class Comment extends React.Component{
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
                    <span>{this.state.usrname}</span>
                </div>
                <p>{this.state.comment}</p>
                <p className='text-muted'>{this.getTime()}</p>
            </div>
        )
    }
}

class CommentGroup extends React.Component{
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

class Main extends React.Component{
    render(props) {
        return (
            <main className='py-5 px-3 px-md-5'>
                <h1>Hi There! Welcome to the <code>UI-Example</code> project.</h1>
                <hr />
                <ErrorBoundary>
                    <h2>What's you name?</h2>
                    <Input id="nameInput" type="username" />
                    <Hello />
                </ErrorBoundary>
                <hr />
                <ErrorBoundary>
                    <h2>Comments</h2>
                    <CommentGroup />
                </ErrorBoundary>
            </main>
        )
    }
}

// ================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
