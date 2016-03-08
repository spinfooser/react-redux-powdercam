import React from 'react';
import ReactTimerMixin from 'react-timer-mixin';

export default class WinterParkCamera extends React.Component {

    constructor() {
        super();
        this.state = {image_src: "http://cams.winterparkresort.com/snow-stake-cam.jpg"};
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick.apply(this), 12000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({image_src: "http://cams.winterparkresort.com/snow-stake-cam.jpg?" + Date.now()});
    }


    render() {
        return (
            <div>
                <p>
                    Winter Park Image!
                </p>
                <img src={this.state.image_src}/>
            </div>
        );
    };
}