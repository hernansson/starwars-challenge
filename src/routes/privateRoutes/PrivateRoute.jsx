import React from 'react'

const PrivateRoute = ({ children }) => {
    const isAuth = () => {
        //some function that return is the user is logged
        return true
    }
    return <>{isAuth ? children : console.log('go to login page')}</>
}

export default PrivateRoute
