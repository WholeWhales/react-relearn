import React from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {TabSelector} from './demos';

import './index.css';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
    path: '/',
    element: <App />
}, {
    path: '/tabselector',
    element: <TabSelector />
}]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
