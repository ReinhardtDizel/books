import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PageGrid from "./App";

ReactDOM.render(
    <React.StrictMode>
        <PageGrid />
    </React.StrictMode>,
    document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
