import React from 'react';
import Header from '../components/Header/';
import RefillStock from './RefillStock';
export default class Shelf extends React.Component {
    render() {
        return (
            <div className="shelf">
                <Header />
                <RefillStock basket={this.props.basket} items={this.props.items} onChange={this.props.onChange}/>
            </div>
        )
    }
}