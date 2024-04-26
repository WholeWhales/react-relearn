import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import {options} from './constants';

import './index.css';

class TabSelectorComponent extends PureComponent {
    static propTypes = {
        options: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        options: [],
        value: "",
        onChange: (value, event) => {
        }
    };

    render() {
        const {options, value, onChange} = this.props;
        return <>
            {
                options && options.length ? options.map(item => <button
                    key={item.value}
                    className={cns("App-demos-tab-selector-component",
                        {
                            "App-demos-tab-selector-component-selected": value === item.value,
                            [`App-demos-tab-selector-component-selected-${value}`]: value === item.value
                        })}
                    onClick={(event) => onChange(item.value, event)}
                >
                    {item.label}
                </button>) : <></>
            }
        </>;
    }
}

class TabSelector extends PureComponent {
    state = {
        color: ""
    };

    /**
     * 受控组件,完全由外部状态控制,内部不保留 state 以维持状态,点击时,外部控制传入颜色,使得按钮的背景以及边框颜色改变
     * @param value
     * @param event
     */
    onTableSelectorChangeHandler = (value, event) => {
        this.setState({
            color: value
        });
        // 取消冒泡事件
        event.stopPropagation();
    };

    render() {
        const {onTableSelectorChangeHandler} = this;
        const {color} = this.state;
        return <TabSelectorComponent
            options={options}
            value={color}
            onChange={onTableSelectorChangeHandler}
        />
    }
}

export default TabSelector;