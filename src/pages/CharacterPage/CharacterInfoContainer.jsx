import { useContext, useEffect } from 'react'
import { HistoryContext } from '../../context/historyContext/HistoryContext'
import { useParams } from 'react-router-dom'
import getPeopleById from '../../api/starwarsAPI/getPeopleById'
import FetchError from '../../components/common/FetchError'
import Loading from '../../components/common/Loading'
import { Box } from '@mui/material'
import useAsync from '../../customHooks/useAsync'
import FullCharacterInfo from './FullCharacterInfo'
const CharacterInfoContainer = () => {
    const { setBarActive } = useContext(HistoryContext)

    const { id } = useParams()
    const { execute, status, value, error } = useAsync(getPeopleById, id, true)
    useEffect(() => {
        setBarActive(true)
    }, [])
    if (status == 'error') {
        return <FetchError handleReload={execute} error={error} />
    }
    if (status === 'pending') {
        return (
            <Box style={{ paddingTop: '45px' }}>
                <Loading />
            </Box>
        )
    }
    return <FullCharacterInfo value={value} />
}

export default CharacterInfoContainer
