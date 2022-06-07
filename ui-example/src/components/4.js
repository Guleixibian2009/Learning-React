import React from 'react';
import * as events from 'events';
const Event = new events.EventEmitter();

export class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            sec: 0
        }
    }

    tick(){
        this.setState({
            time: new Date().toLocaleString(),
            sec: this.state.sec + 1
        })
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        if (this.props.mode === "time") {
            return(
                <span>{this.state.time}</span>
            );
        } else if (this.props.mode === "sec") {
            return(
                <span>{this.state.sec}</span>
            );
        }
    }
}

class Hito extends React.Component{
    constructor(props){
        window.hito = "";
        super(props);
        const api = "https://api.uixsj.cn/hitokoto/get?type=en";
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            window.hito = this.response
        }
        xhr.open("GET", api);
        xhr.send("");
        Event.emit("hitoupdate", "");
        this.state = {
            hito: window.hito
        }
    }

    componentDidMount(){
        const component = this;
        Event.on("hitoupdate", function(){
            component.setState({
                hito: window.hito
            });
        });
    }

    render(){
        return(
            <span>{this.state.hito}</span>
        );
    }
}

class UpdateHito extends React.Component{
    getHito(){
        const api = "https://api.uixsj.cn/hitokoto/get?type=en";
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            window.hito = this.response
        }
        xhr.open("GET", api);
        xhr.send("");
        Event.emit("hitoupdate", "");
    }

    componentDidMount(){
        this.getHito();
    }

    onClick(evt){
        this.getHito();
    }

    render(){
        return(
            <button className='btn btn-outline-primary btn-sm ms-auto' onClick={()=>this.onClick()}>Update Hitokoto</button>
        );
    }
}
export class HitoGroup extends React.Component{
    render(){
        return(
            <div className='d-flex flex-row'>
                <Hito />
                <UpdateHito />
            </div>
        );
    }
}