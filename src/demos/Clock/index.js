import {PureComponent} from 'react';

class Clock extends PureComponent {
    constructor(props) {
        console.log('Component constructor!');
        super(props);
        this.timer = null;
    }

    state = {
        date: new Date(),
    };

    componentDidMount() {
        console.log('Component did mount!');
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Component did update!');
    }

    componentWillUnmount() {
        console.log('Component will unmount!');
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        const {date}  = this.state;
        return <>
            <h1>
                It's time to clock!
            </h1>
            <h2>
                {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h2>
        </>;
    }
}

export default Clock;