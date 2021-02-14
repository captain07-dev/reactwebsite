import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Time from './Time';
import './index.css';

ReactDOM.render(<><BrowserRouter><Time /></BrowserRouter></>,document.getElementById('root'));