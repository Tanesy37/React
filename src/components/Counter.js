import React, { Component } from 'react';

class Counters extends Component {
    constructor() {
        super()
        this.state = {
            name: "count",
            count: 0,
        }
    }
    Increment() {

        this.setState({ count: this.state.count + 1 }, () => {
            console.log("callback", this.state.count);
        })

    }


    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => {
                    this.Increment()
                }}>{this.state.name}</button>
            </div>
        );
    }
}

export default Counters;
