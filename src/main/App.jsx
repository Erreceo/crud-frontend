import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Footer from "../components/template/Footer";
import {HashRouter} from "react-router-dom";
import Routes from "./Routes";

export default props =>
    <HashRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </HashRouter>