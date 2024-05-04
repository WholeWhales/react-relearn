import {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.css';

class InputListMessages extends PureComponent {
    static propTypes = {
        messages: PropTypes.array,
    };

    static defaultProps = {
        messages: []
    };

    render() {
        const {messages} = this.props;
        return <ul>
            {
                messages && messages.length ? messages.map((message, index) => {
                    return <li key={index}>{message}</li>;
                }) : <></>
            }
        </ul>
    }
}

class InputList extends PureComponent {
    state = {
        messages: [],
        inputValue: ''
    };

    onChangeHandler = (event) => {
        const {target: {value}} = event;
        this.setState({
            inputValue: value
        });
        // 取消冒泡事件
        event.stopPropagation();
    };

    onSendHandler = (event) => {
        const {messages, inputValue} = this.state;
        this.setState({
            messages: [...messages, inputValue],
            inputValue: ''
        })
        // 取消冒泡事件
        event.stopPropagation();
    };

    render() {
        const {messages, inputValue} = this.state;
        const {onChangeHandler, onSendHandler} = this;
        return <section className="App-demos-inputList">
            <InputListMessages messages={messages}/>
            <section className='App-demos-inputList-part'>
                <input
                    value={inputValue}
                    className='App-demos-inputList-part-input'
                    onChange={onChangeHandler}
                />
                <button
                    className='App-demos-inputList-part-button'
                    onClick={onSendHandler}
                >
                    Send
                </button>
            </section>
        </section>
    }
}

export default InputList;

