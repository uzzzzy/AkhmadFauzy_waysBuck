// import necessary utility from rrd
import {Redirect, Route } from 'react-router-dom';

// create component here
export default function PrivateRoute({component: Component, ...rest}){

    const isSignIn = JSON.parse(localStorage.getItem('isSignIn'))

    return (
        <>
            <Route {...rest} 
                render={
                    (props) => isSignIn?
                        <Component {...props} /> 
                        : 
                        <Redirect to="/"/>} 
            />
        </>
    )
}
