import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/index.scss';

class App extends Component {
<<<<<<< HEAD
=======
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jd4u5jk0/pulses/3/f/q/2-toor-dal-arhar-dal-flipkart-supermart-select-original-imafyakgd5h5ekgd.jpeg',
                    title: 'Flipkart Supermart Select Rajma Red',
                    currentValue: 84,
                    value:  90,
                    quantity: '500gm',
                },
                {
                    id: 1,
                    imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jd4u5jk0/pulses/3/f/q/2-toor-dal-arhar-dal-flipkart-supermart-select-original-imafyakgd5h5ekgd.jpeg',
                    title: 'Flipkart Supermart Select Rajma Red',
                    currentValue: 84,
                    value:  90,
                    quantity: '500gm',
                },
                {
                    id: 2,
                    imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jd4u5jk0/pulses/3/f/q/2-toor-dal-arhar-dal-flipkart-supermart-select-original-imafyakgd5h5ekgd.jpeg',
                    title: 'Flipkart Supermart Select Rajma Red',
                    currentValue: 84,
                    value:  90,
                    quantity: '500gm',
                },
                {
                    id: 3,
                    imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jd4u5jk0/pulses/3/f/q/2-toor-dal-arhar-dal-flipkart-supermart-select-original-imafyakgd5h5ekgd.jpeg',
                    title: 'Flipkart Supermart Select Rajma Red',
                    currentValue: 84,
                    value:  90,
                    quantity: '500gm',
                },
                {
                    id: 4,
                    imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jd4u5jk0/pulses/3/f/q/2-toor-dal-arhar-dal-flipkart-supermart-select-original-imafyakgd5h5ekgd.jpeg',
                    title: 'Flipkart Supermart Select Rajma Red',
                    currentValue: 84,
                    value:  90,
                    quantity: '500gm',
                },
                {
                    id: 5,
                    imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jd4u5jk0/pulses/3/f/q/2-toor-dal-arhar-dal-flipkart-supermart-select-original-imafyakgd5h5ekgd.jpeg',
                    title: 'Flipkart Supermart Select Rajma Red',
                    currentValue: 84,
                    value:  90,
                    quantity: '500gm',
                },
            ],
            basket: {}
        }

        this.addItemToBasket = this.addItemToBasket.bind(this);
    }

    addItemToBasket(id, value) {
        const basket = Object.assign({}, this.state.basket);

        basket[id] = value;

        this.setState({
            basket,
        });
    }

>>>>>>> 9e9d677df52537f2ebbd7d58183f0e5f01185e6b
    render() {
        return (
            <p>Wakanda Forever!</p>
        );
    }
}

render(<App />, document.getElementById('grocery-app'));