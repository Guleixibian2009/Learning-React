import React from 'react';
import {UsrAvatar} from './common';

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
                height: '333px',
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
            height: "",
            width: ""
        }
    }

    componentDidMount(){
        switch (this.props.direction) {
            case "hor":
                this.setState({
                    width: "50%",
                    height: "100%"
                });
                break;

            case "ver":
                this.setState({
                    height: "auto",
                    width: "100%"
                });
                break;

            case "ful":
                this.setState({
                    height: "100%",
                    width: "100%"
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
                <p className='m-0'>{this.props.content}</p>
            </div>
        )
    }
}

export class Card extends React.Component{
    render(){
        if (this.props.dir === "hor-img-left") {
            return(
                <div className='border border-1 rounded rounded-5 d-flex flex-row mb-3' style={{height: "300px"}}>
                    <CardImage direction="hor" url={this.props.url} />
                    <CardBody direction="hor" usrName="Gulei" content={this.props.content} />
                </div>
            );
        } else if (this.props.dir === "ver-img-top") {
            return(
                <div 
                    className='border border-1 rounded rounded-5 d-flex flex-column mb-3 mx-md-3'
                    style={{
                        flexBasis: "33%"
                    }}
                >
                    <CardImage direction="ver" url={this.props.url} />
                    <CardBody direction="ver" usrName="GitHub" content={this.props.content} />
                </div>
            )
        } else if (this.props.dir === "ver-img-bot") {
            return(
                <div className='border border-1 rounded rounded-5 d-flex flex-column mb-3 mx-md-3' style={{
                    flexBasis: "33%"
                }}>
                    <CardBody direction="ver" usrName="GitHub" content={this.props.content} />
                    <CardImage direction="ver" url={this.props.url} />
                </div>
            )
        } else if (this.props.dir === "ver-text-ful") {
            return(
                <div className='border border-1 rounded rounded-5 d-flex flex-column mb-3 mx-md-3' style={{
                    flexBasis: "33%"
                }}>
                    <CardBody direction="ful" usrName="GitHub" content={this.props.content} />
                </div>
            )
        }
    }
}