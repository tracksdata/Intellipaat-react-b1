import React, { Component } from 'react';

class Greet extends Component { // old syntax till react js version 15

    f1() {
    }
    f2() {
    }
    render() {

        this.f1();
        this.f2();

        return (
            <div>
                <button>Click Me</button>
            </div>
        );
    }
}

export default Greet;