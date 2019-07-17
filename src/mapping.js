import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './header'
import Login from './login'
import Main from './main'
import List from './list'
class Mapping extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Main" component={Main}/>
                    <Route path="/List" component={List}/>
                </div>
            </Router>
        )
    }
}
export default Mapping;