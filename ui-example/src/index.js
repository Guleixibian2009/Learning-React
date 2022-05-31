import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import {ErrorBoundary} from './components/common';
import {Input, Hello} from './components/1';
import {CommentGroup} from './components/2';


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
