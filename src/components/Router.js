import React from 'react'; 
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route path="/store/:storeId" component={App}/>
            <Route component={NotFound}/> {/*Catch all path for all other routes*/}
        </Switch>
    </BrowserRouter>
)

export default Router;