import { React, Component } from 'react';

class Employee extends Component {

    constructor() {
        super();
        console.log(">>>> Employee :: constructor");
    }

    test() {
        // .......
        console.log(">>>> Employee:: test function called");
    }

    loadEmployees() {
        return (
            <div className="card card-body col-5">
                <h1>Name: Praveen</h1>
                <h1>Locatiion: Hyderabad</h1>
                <h1>Designation: Java Fullstack consultant</h1>
            </div>
        )
    }

    render() {
        console.log(">>>> Employee :: render");
        return (
            <div>
                <h1>Employee Component</h1> <hr />
                <button className='btn btn-primary'  onClick={()=>this.test()} > Click Here </button> <hr />
                {this.loadEmployees()}
                <hr />
                {this.loadEmployees()}

            </div>
        )
    }
}
export default Employee
