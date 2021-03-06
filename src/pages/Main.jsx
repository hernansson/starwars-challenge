import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import getPeople from '../api/starwarsAPI/getPeople'
import CustomMenuItem from '../components/starwars/CustomMenuItem'
import { pagesStyle } from './pagesStyle'
import FetchError from '../components/starwars/FetchError'
import Loading from '../components/starwars/Loading'
import { Box } from '@mui/material'
import { HistoryContext } from '../context/historyContext/HistoryContext'

const Main = () => {
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

    return (
        <Box style={pagesStyle.main}>
            <InfiniteScroll
                loadMore={handleNext}
                hasMore={more}
                loader={<Loading key={1} />}
                initialLoad={true}
                threshold={50}
            >
                {people.map((p, i) => {
                    return <CustomMenuItem key={i} data={p} />
                })}
            </InfiniteScroll>
        </Box>
    )
}

export default Main
