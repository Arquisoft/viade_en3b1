import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export class MyCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: this.props.photos,
        }

        this.media = [];
        this.state.photos.forEach((p) => {
            this.media.push({ source: p.getContent() });
        });
    }

    render() {

        return (

            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
                media={this.media}
            />
        );
    }
}

export default MyCarousel;