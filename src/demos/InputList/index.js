import {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Messages extends PureComponent {
    static propTypes = {
        messages: PropTypes.array,
    };

    static defaultProps = {
        messages: []
    }

    render() {
        const {messages} = this.props;
        return <ul className="App-demos-input-list-messages">
            {
                messages && messages.length ? messages.map((message, index) => <li key={index}>
                    {message}
                </li>) : <></>
            }
        </ul>
    }
}

class InputList extends PureComponent {
    state = {
        classmates: '',
        messages: []
    };

    /**
     * 受控组件,完全由外部状态控制,内部不保留 state 以维持状态,输入时,外部控制传入字符,使得输入框内显示输入的字符串
     * @param event
     */
    onInputListChangeHandler = (event) => {
        const {target: {value}} = event;
        this.setState({
            classmates: value
        });
        // 取消冒泡事件
        event.stopPropagation();
    }

    onInputListSendHandler = (event) => {
        const {messages, classmates} = this.state;
        if (classmates) {
            messages.push(classmates);
            this.setState({
                messages: [...messages],
                classmates: ''
            });
        }
        // 取消冒泡事件
        event.stopPropagation();
    };

    render() {
        const {
            onInputListChangeHandler,
            onInputListSendHandler,
        } = this;
        const {
            classmates,
            messages,
        } = this.state;

        return <section className="App-demos-input-list">
            <Messages messages={messages}/>
            <input className="App-demos-input-list-input" value={classmates}
                   onChange={(event) => onInputListChangeHandler(event)}/>
            <button className="App-demos-input-list-button" onClick={(event) => onInputListSendHandler(event)}>
                Send
            </button>
        </section>
    }
}

export default InputList;