import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import CustomMenuItem from '../../components/common/CustomMenuItem'
import { pagesStyle } from '../pagesStyle'
import Loading from '../../components/common/Loading'
import { Box } from '@mui/material'

const Main = ({ handleNext, more, people }) => {
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
