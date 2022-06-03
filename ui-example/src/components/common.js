import React from 'react';
import jQuery from 'jquery';
const $ = jQuery;
export class ErrorBoundary extends React.Component {
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

export class Spinner extends React.Component{
    render() {
        return (
            <div 
                className='border-0 ps-2 pt-2'
                style={{
                    height: this.props.outerHeight,
                    width: this.props.outerHeight,
                    marginRight: "5px"
                }}
            >
                <div 
                    className='spinner-border text-muted' 
                    style={{
                        height: this.props.innerHeight,
                        width: this.props.innerHeight
                    }}
                />
            </div>
        )
    }
}

export class UsrAvatar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            usrname: this.props.name,
            avatarLink: `http://${window.location.host}/avatar/${this.props.name}.png`,
            gotAvatar: false
        }
    }

    componentDidMount(){
        const component = this;
        $.ajax({
            url:this.state.avatarLink, 
            success:function(){
                component.setState({
                    gotAvatar: true
                });
            }, 
            error: function(){
                component.setState({
                    gotAvatar: false
                });
            },
            headers: {
                "Accept": "image/png",
            },
            cache: false
        });
    }

    render() {
        if (this.state.gotAvatar) {
            return <img src={this.state.avatarLink} alt={this.state.usrname} height="32px" width="32px" style={{borderRadius: "50%", marginRight: "5px", display: "inline-block"}} />
        } else {
            return <Spinner outerHeight="32px" innerHeight="18px" />
        }
    }
}