import React from 'react';
import {UsrAvatar} from './common';

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
                height: "100%",
                width: '50%'
            });
        } else if (this.state.direction === 'ver'){
            this.setState({
                height: '50%',
                width: "100%"
            });
        } else {
            throw new Error(`CardImage: direction ${this.state.direction} not found.`)
        }
    }

    render(){
        return(
            <img 
                src={this.props.url}
                alt="Something here"
                style={{
                    objectFit: "cover",
                    height: this.state.height,
                    width: this.state.width
                }}
            />
        )
    }
}

class CardBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height: "100%",
            width: "100%"
        }
    }

    componentDidMount(){
        switch (this.props.direction) {
            case "hor":
                this.setState({
                    width: "50%"
                });
                break;
        
            default:
                break;
        }
    }

    render(){
        return(
            <div
                className='d-flex flex-column p-3'
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    overflow: "auto"
                }}
            >
                <div 
                    className='d-flex flex-row mb-2'
                >
                    <UsrAvatar name={this.props.usrName} />
                    <span
                        className='d-inline align-self-center'    
                    >
                        {this.props.usrName}
                    </span>
                </div>
                <p className='m-0'>{lipsum}{lipsum}{lipsum}</p>
            </div>
        )
    }
}

export class Card extends React.Component{
    render(){
        if (this.props.dir === "hor-img-left") {
            return(
                <div className='border border-1 rounded rounded-5 d-flex flex-row' style={{height: "300px"}}>
                    <CardImage direction="hor" url="https://s4.ax1x.com/2022/02/05/HniRun.jpg" />
                    <CardBody direction="hor" usrName="Gulei" />
                </div>
            );
        }
    }
}