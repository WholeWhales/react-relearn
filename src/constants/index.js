import App from "../App";
import {Clock, InputList, TabSelector} from "../demos";
import React from "react";

const demos_link = [{
    id: 'tabselector',
    label: 'TabSelector',
    value: '/tabselector'
}, {
    id: 'inputlist',
    label: 'InputList',
    value: '/inputlist'
}, {
    id: 'clock',
    label: 'Clock',
    value: '/clock'
}];

const demos_browser_router_list = [{
    path: '/',
    element: <App />
}, {
    path: '/tabselector',
    element: <TabSelector />
}, {
    path: '/inputlist',
    element: <InputList />
}, {
    path: '/clock',
    element: <Clock />
}];

export {
    demos_link,
    demos_browser_router_list
};