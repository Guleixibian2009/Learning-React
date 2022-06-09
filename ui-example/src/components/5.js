import React from "react";

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export class TipBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor: this.props.bgColor, //Should be like rgb(**,**,**)
            bdColor: this.props.bdColor  //Should be like rgba(**,**,**,0.3)
        }
    }

    render(){
        return(
            <div
                style={{
                    borderLeft: `solid 5px ${this.state.bdColor}`,
                    backgroundColor: this.state.bgColor
                }}
                className='p-3 mb-3'
            >
                <strong>Tips</strong>
                <p className="m-0">{lipsum}</p>
            </div>
        );
    }
}