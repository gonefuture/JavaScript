import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Example from './Example';
import LikeButton from './Button';
import Demo2 from '/demo/Demo2';

ReactDOM.render(
  //<App />,
        <div>
        <Demo2 />
      	<Example />
        <LikeButton/>
        </div>
      	,
  document.getElementById('root')

);
