import React from 'react';
import CategoryTitle from '../components/CategoryTitle';
import Item from '../components/Item';
import Slider from 'react-slick';

const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false
};

export default class RefillStock extends React.Component {
    render() {
        return (
            <div>
                <CategoryTitle
                    title="Refill Your Stock"
                    subtitle="You purchased following items recently"
                />
                <Slider {...settings}>
                {
                  this.props.items.map(item => <Item item={item} quantity={this.props.basket[item.id] || 0} onChange={this.props.onChange} />)  
                }
                </Slider>
            </div>
        )
    }
}