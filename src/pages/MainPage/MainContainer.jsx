import React, { useContext, useEffect, useState } from 'react'
import getPeople from '../../api/starwarsAPI/getPeople'
import FetchError from '../../components/common/FetchError'
import { HistoryContext } from '../../context/historyContext/HistoryContext'
import Main from './Main'
const MainContainer = () => {
    const { setBarActive } = useContext(HistoryContext)
    const [page, setPage] = useState(1)
    const [more, setMore] = useState(true)
    const [people, setPeople] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        setBarActive(false)
    }, [])
    const handleReload = () => {
        setPeople([])
        setError(false)
        setPage(1)
    }
    const handleNext = async () => {
        try {
            const data = await getPeople(page)
            if (data.next) {
                setPeople([...people, ...data.results])
                setPage(page + 1)
            } else {
                setMore(false)
            }
        } catch {
            setError(true)
        }
    }

    if (error) {
        return <FetchError handleReload={handleReload} />
    }

    return <Main handleNext={handleNext} more={more} people={people} />
}

export default MainContainer
