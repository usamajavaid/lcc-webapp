import React, { Component } from 'react';
import {Switch,Router,Route} from 'react-router-dom';
import history from './history';
import Home from '../Components/MenuComponents/Home';
import Information from '../Components/MenuComponents/Info';
import Specialists from '../Components/MenuComponents/Specalist';
import Consultants from '../Components/MenuComponents/Consultants';
import LiveCase from '../Components/MenuComponents/LiveCases';
import Researchs from '../Components/MenuComponents/Research';
import Reviews from '../Components/MenuComponents/Review';
import Blogs from '../Components/MenuComponents/Blog';
import Contacts from '../Components/MenuComponents/Contact';
class Routing extends Component {
    render() {
        return (
            <React.Fragment>
            {
                <Router history={history}>
                    <Switch>
                        <Route 
                            exact
                            path="/" 
                            render={props=><Home {...props}/>}
                        />
                        <Route  
                            path ="/Components/MenuComponents/Info" 
                            render={props=><Information {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/Specalist" 
                            render={props=><Specialists {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/Research" 
                            render={props=><Researchs {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/Consultants" 
                            render={props=><Consultants {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/LiveCases" 
                            render={props=><LiveCase {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/Review" 
                            render={props=><Reviews {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/Blog" 
                            render={props=><Blogs {...props}/>} 
                        />
                        <Route  
                            path ="/Components/MenuComponents/Contact" 
                            render={props=><Contacts {...props}/>} 
                        />
                    </Switch>
            </Router> 
            }
            </React.Fragment>
        )
    }
}
export default Routing;