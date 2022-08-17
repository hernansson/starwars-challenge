import { BrowserRouter } from 'react-router-dom'
import HistoryProvider from './historyContext/HistoryContext'
const Providers = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <HistoryProvider>{children}</HistoryProvider>
            </BrowserRouter>
        </>
    )
}

export default Providers
