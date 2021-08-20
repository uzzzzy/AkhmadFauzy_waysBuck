import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/header'
import Home from './pages/home'
import Product from './pages/product'
import PrivateRoute from "./components/private-route";

function App() {

    return (
        <div className="container">
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute exact path="/p/:id" component={Product} />
                </Switch>
            </Router>
        </div>
    )
}

export default App