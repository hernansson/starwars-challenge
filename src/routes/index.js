import Main from '../pages/Main'
import Error from '../pages/Error'
import FullCharacterInfo from '../components/starwars/FullCharacterInfo'

const Routes = [
    {
        path: '/',
        component: <Main />,
        exact: true,
    },
    {
        path: '/character/:id',
        component: <FullCharacterInfo />,
        exact: true,
    },
    {
        path: '/error',
        component: <Error />,
        exact: true,
    },
    {
        path: '*',
        component: <Error />,
        exact: true,
    },
]

export default Routes
