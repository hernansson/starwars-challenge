import { Routes, Route } from 'react-router-dom'
import privates from './privateRoutes'
import publics from './publicRouters'
const customRoutes = () => {
    return (
        <Routes>
            {privates.map((privateRoute, idx) => (
                <Route
                    path={privateRoute.path}
                    element={privateRoute.component}
                    key={idx}
                />
            ))}
            {publics.map((privateRoute, idx) => (
                <Route
                    path={privateRoute.path}
                    element={privateRoute.component}
                    key={idx}
                />
            ))}
        </Routes>
    )
}

export default customRoutes
