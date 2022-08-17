import Error from '../../pages/Error'
import CharacterPage from '../../pages/CharacterPage'
import MainPage from '../../pages/MainPage/MainContainer'
const Routes = [
    {
        path: '/',
        component: <MainPage />,
        exact: true,
    },
    {
        path: '/character/:id',
        component: <CharacterPage />,
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
