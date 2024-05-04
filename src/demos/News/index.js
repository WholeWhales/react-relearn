import {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.css';

class NewsMessages extends PureComponent {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        const {messages} = this.props;
        return messages && messages.length ? messages.map((message, index) => {
            return <div key={index} className='App-demos-news-item'>
                {message}
            </div>
        }) : <></>;
    }
}

class News extends PureComponent {
    constructor(props) {
        super(props);
        this.timer = null;
        this.newsRef = null;
    }

    state = {
        messages: []
    };

    getNewsMessages = () => {
        this.setState((prev) => {
            const {messages} = prev;
            return {
                messages: [
                    messages.length + 1,
                    ...messages,
                ]
            };
        });
    };

    componentDidMount() {
        const {getNewsMessages} = this;
        for (let i = 0; i < 20; i++) {
            getNewsMessages();
        }
        this.timer = setInterval(() => {
            if (this.state.messages.length > 100) {
                clearInterval(this.timer);
                this.timer = null;
                return true;
            }
            getNewsMessages();
        }, 1000);
    }

    getSnapshotBeforeUpdate() {
        return this.newsRef.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
        const scrollTop = this.newsRef.scrollTop;
        if (scrollTop < 2) return true;
        const scrollHeight = this.newsRef.scrollHeight;
        this.newsRef.scrollTop = scrollHeight - prevScrollHeight + scrollTop;
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
        this.setState({
            messages: []
        });
    }

    render() {
        const {messages} = this.state;
        return <section
            ref={n => {
                this.newsRef = n;
                return this.newsRef;
            }}
            className='App-demos-news'
        >
            <NewsMessages
                messages={messages}
            />
        </section>
    }
}

export default News;