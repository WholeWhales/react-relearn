import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import {options} from './constants';

import './index.css';

class TabSelectorOptions extends PureComponent {
    static propTypes = {
        options: PropTypes.array,
        value: PropTypes.string,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        options: [],
        value: '',
        onChange: (value, event) => {
        }
    };

    render() {
        const {options, value, onChange} = this.props;
        return options && options.length ? options.map(option => {
            const {id, value: optionValue, label} = option;
            return <button
                key={id}
                className={cns(
                    'App-demos-tabSelector-option',
                    {
                        'App-demos-tabSelector-option-selected': value === optionValue,
                        [`App-demos-tabSelector-option-selected-${value}`]: value === optionValue,
                    }
                )}
                onClick={(event) => onChange(optionValue, event)}
            >
                {label}
            </button>;
        }) : <></>
    }
}

class TabSelector extends PureComponent {
    state = {
        color: ''
    };

    onChangeHandler = (value, event) => {
        this.setState({
            color: value
        });
        // 取消冒泡事件
        event.stopPropagation();
    };

    render() {
        const {color} = this.state;
        const {onChangeHandler} = this;
        return <section className='App-demos-tabSelector'>
            <TabSelectorOptions
                options={options}
                value={color}
                onChange={onChangeHandler}
            />
        </section>;
    }
}

export default TabSelector;