import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './component/main';
import store from  './store/store.js'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><NavBar /></Provider>, document.getElementById('root'));

