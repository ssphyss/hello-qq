import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';            //可影響全站的組件樣式全局js
import './assets/iconfont/iconfont.css';   // 引用全局iconfont
import './resources/sass/all.scss'
ReactDOM.render(<App />, document.getElementById('root'));

