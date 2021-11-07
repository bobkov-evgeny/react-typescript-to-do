import React from 'react';
import {Navbar} from "./components/Navbar";
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App: React.FC = () => {

    return (<BrowserRouter>
        <Navbar/>
        <div className="container">
            <Switch>
                <Route path="/" exact/>
                <Route component={AboutPage} path="/about" exact/>
            </Switch>
        </div>
    </BrowserRouter>);
}

export default App;
