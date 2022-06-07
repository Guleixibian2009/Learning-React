import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import {ErrorBoundary} from './components/common';
import {Input, Hello} from './components/1';
import {CommentGroup} from './components/2';
import {Card} from './components/3';

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const lipsumShort = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

class Main extends React.Component{
    render(props) {
        return (
            <main className='p-3 p-md-5'>
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
                <hr />
                <ErrorBoundary>
                    <h2>Cards</h2>
                    <Card dir="hor-img-left" url="https://s4.ax1x.com/2022/02/05/HniRun.jpg" content={lipsum + lipsum} />
                    <div className='d-flex flex-column flex-md-row'>
                        <Card dir="ver-img-top" url="https://s1.ax1x.com/2022/03/10/bhKYk9.jpg" content={lipsumShort} />
                        <Card dir="ver-img-bot" url="https://s1.ax1x.com/2022/06/05/XwQki6.jpg" content={lipsumShort} />
                        <Card dir="ver-text-ful" content={lipsum + lipsumShort + lipsumShort} />
                    </div>
                </ErrorBoundary>
            </main>
        )
    }
}

// ================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
