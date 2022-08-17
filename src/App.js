import Routes from './routes'
import Providers from './context'
import Layout from './layout'
function App() {
    return (
        <Providers>
            <Layout>
                <Routes />
            </Layout>
        </Providers>
    )
}

export default App
