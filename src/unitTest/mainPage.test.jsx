import { render, screen } from '@testing-library/react'
import { HistoryContext } from '../context/historyContext/HistoryContext'
import CustomMenuItem from '../components/starwars/CustomMenuItem'
import { MemoryRouter } from 'react-router-dom'

test('Character renders in list', () => {
    const data = {
        home: 'Tokyo',
        specie: 'Samurai',
        nam: 'Keanu Reeves',
        url: 'https://swapi.dev/api/people/2}',
    }
    const contextValue = { setBarTitle: () => {} }
    render(
        <HistoryContext.Provider value={contextValue}>
            <MemoryRouter>
                <CustomMenuItem data={data} />
            </MemoryRouter>
        </HistoryContext.Provider>
    )
    const details = screen.getByTestId('test-specie-home')
    expect(details.innerHTML).toBe('Samurai from Tokyo')
})
