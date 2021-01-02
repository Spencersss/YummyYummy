import React, { Component } from 'react';
import MenuPage from './menu';
import ContactUsPage from './contactus';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './notfound';

class Main extends Component {

    render() {
        return(
            <div>
                <h1>Yummy Yummy Kitchen</h1>
                <Switch>
                    <Route exact path="/">
                        <MenuPage />
                    </Route>       
                    <Route path="/contactus">
                        <ContactUsPage />    
                    </Route> 
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
        )
    }

}

export default Main;