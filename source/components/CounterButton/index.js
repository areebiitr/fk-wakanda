import React from 'react';

const CounterButton = ({ value, onChange }) => {
    function changeCount(operation) {
        if (operation === 'INC') {
            onChange(value + 1);
        } else if (operation === 'DEC') {
            onChange(value - 1);
        }
    }

    return (
        <div className="counter-btn">
            {
                value
                ? (
                    <React.Fragment>
                        <button onClick={() => { changeCount('INC') }}> + </button>
                        <span>{value}</span>
                        <button onClick={() => { changeCount('DEC') }}> - </button>
                    </React.Fragment>
                )
                : (
                    <button onClick={() => { changeCount('INC') }}>Add Item</button>
                )
            }
        </div>
    )
}

export default CounterButton;