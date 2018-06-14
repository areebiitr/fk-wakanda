import React from 'react';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import './header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img className="mart-logo" src={logo} />
                <div className="input-container">
                    <form>
                        <input className="search-box" type="text" placeholder="Search for Products..."/>
                    </form>
                    <div className="search-button">
                        <img src={search} />
                    </div>
                </div>
            </header>
        )
    }
}