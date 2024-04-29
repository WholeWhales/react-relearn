import {PureComponent} from 'react';

class TickTimer extends PureComponent {
    state = {
        timer: new Date()
    };

    componentDidMount() {
        console.log('Component did mount!');
        setInterval(() => this.setState({timer: new Date()}), 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update!');
    }

    componentWillUnmount() {
        console.log(`Component will unmount!`);
    }

    render() {
        const {timer} = this.state;
        return <section className="App-demos-ticktimer">
            {timer.toLocaleString()}
        </section>
    }
}

export default TickTimer;