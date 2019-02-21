import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const description = 'I just learnt how to create a React node and render it to the DOM ';
const myTitleId = 'main-title';
const name = 'Guil';


const header =
    ( <header>
        <h1 id = { myTitleId } > { name }'s First React Element' </h1>
        <p> { description } </p> 
        </header>
    );




ReactDOM.render(
    header,
    document.getElementById('root'));
