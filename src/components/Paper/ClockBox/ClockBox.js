import React, {Component} from 'react';
import './ClockBox.css';
import Clock from 'react-live-clock';

class ClockBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontSize: 30,
            timeZone: 'Asia/Seoul'
        };
    }

    resize = () => {
        let fontSize = 30;
        if (this.refs.clockBox) {
            let width = this.refs.clockBox.offsetWidth;
            if (width < 200) {
                fontSize = 16;
            } else if (width < 300) {
                fontSize = 20;
            } else if (width < 500) {
                fontSize = 24;
            }

            if (this.state.fontSize !== fontSize) {
                this.setState({
                    fontSize: fontSize
                });
            }
        }
    };

    componentDidUpdate() {
        this.resize();
    }

    componentDidMount() {
        this.resize();
    }

    render() {
        return (
            <div className="clock-box" ref="clockBox">
                <div className="clock" style={{fontSize: this.state.fontSize + "px"}}>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={this.state.timeZone}/>
                </div>
                <div className="timezone">{this.state.timeZone}</div>
            </div>
        );
    }
}

export default ClockBox;
