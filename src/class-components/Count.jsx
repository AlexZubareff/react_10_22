import React from 'react';

export class Count extends React.Component {
    state = {
        count: 1,
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }


    render() {
        
        return <>
            <p>Count props: {this.props.count}</p>
            <p>Count state: {this.state.count}</p>
            <button type="button" onClick={this.handleClick}>Click</button>
        </>
    }
} 