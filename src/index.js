import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import {demos_browser_router_list} from './constants';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter(demos_browser_router_list);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
