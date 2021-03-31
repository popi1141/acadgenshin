import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import App from './components/app';
import firebase from 'firebase/app';
import 'firebase/analytics'
import Favicon from 'react-favicon';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDypwOwwS_srCA89rx3BEzV4fBlouGDpls",
    authDomain: "acadarena-genshin.firebaseapp.com",
    projectId: "acadarena-genshin",
    storageBucket: "acadarena-genshin.appspot.com",
    messagingSenderId: "713131610899",
    appId: "1:713131610899:web:caa7229b51577dbf7b00e6",
    measurementId: "G-VNQSS9K0PS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
    <Fragment>
        <Favicon url="https://uploads-ssl.webflow.com/5ecf61b0089219aaf25d16a0/5ed14d7b593928447f4f93cf_EAAfavicon.png" />
        <App/>
    </Fragment>
, document.getElementById('root'));
