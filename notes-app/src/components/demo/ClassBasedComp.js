import { Component, useState } from 'react';

class ClassBasedComp extends Component {
    constructor(props){
        super(props);
        console.log("Constructor")
        this.state = {
            counter : 0,
            result : []
        }
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    onIncrease = () => {
        // this.state.counter = this.state.counter + 1
        this.setState({
            counter : this.state.counter + 1
        })
    }
    onStoreResult = () => {
        this.setState({
            result : [this.state.counter, ...this.state.result]
        })
    }
    render(){
        console.log("Render")
        return (
            <div>
                <p className="display-4">Title : {this.props.title}</p>
                <p className="display-4">Counter : {this.state.counter}</p>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onStoreResult}>Store Result</button>
                <ul className="list-group">
                    {this.state.result.map((val, index) => <li className="list-group-item" key ={index}>{val}</li>)}
                </ul>
            </div>
        )
    }
}

export default ClassBasedComp;