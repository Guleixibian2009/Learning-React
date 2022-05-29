import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'

class Hello extends React.Component{
    render(props) {
        return (
            <p>Hello, {this.props.name}!</p>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello name="Guleixibian2009" />);
