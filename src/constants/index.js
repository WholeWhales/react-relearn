import App from "../App";
import {Clock, InputList, News, TabSelector} from "../demos";
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
}, {
    id: 'news',
    label: 'News',
    value: '/news'
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
}, {
    path: '/news',
    element: <News />
}];

export {
    demos_link,
    demos_browser_router_list
};