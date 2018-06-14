import React from 'react';

import CounterButton from '../CounterButton';

const Item = ({ item, quantity, onChange }) => {
    return (
        <div className="item-container">
            <img src={item.imageUrl} />

            <h5>{item.title}</h5>

            <div className="price-container">
                <span>₹{ item.currentValue }</span>
                {
                    item.currentValue !== item.value
                        ? (
                            <React.Fragment>
                                <span className="old-price">₹{ item.value }</span>
                                <span className="savings">₹{ item.value - item.currentValue}</span>
                            </React.Fragment>
                        )
                        : (
                            null
                        )
                }
            </div>
            <div className="button-container">
                <h5>{ item.quantity }</h5>
                
                <CounterButton
                    style={{
                        display: 'inline-flex',
                    }}
                    value={quantity}
                    onChange={(value) => {
                        onChange(item.id, value);
                    }}
                />
            </div>
        </div>
    );
};

export default Item;