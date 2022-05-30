import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'

class Comment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            usrname : this.props.name,
            comment : ""
        }
    }

    getTime(){
        return new Date().toLocaleDateString()
    }
}

class Main extends React.Component{
    render() {
        return (
            <main className='py-5 px-3 px-md-5'>
                <Comment name="Gulei" />
                <Comment name="Somebody" />
                <Comment name="Someone else" />
            </main>
        )
    }
}

// ================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
