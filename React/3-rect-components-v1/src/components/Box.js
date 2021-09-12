import React from 'react';
import FoodBox from './FoodBox';
import Greet from './Greet';

const Box = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header bg-info">APP Component</div>
                <div className="card-body">
                    <div className="card-text">
                        <h1>Box Component</h1> <hr />
                        <FoodBox/>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Box;