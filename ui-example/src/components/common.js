import React from 'react';
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