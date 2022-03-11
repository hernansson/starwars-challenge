import appRoutes from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HistoryProvider from './context/historyContext/HistoryContext'

function App() {
    return (
        <div>
            <HistoryProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        {appRoutes.map((route, idx) => (
                            <Route
                                path={route.path}
                                element={route.component}
                                key={idx}
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            </HistoryProvider>
        </div>
    )
}

export default App
