import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { swStyles } from './swStyles'
import { Box, MenuItem, Typography, Divider } from '@mui/material'
import useAsync from '../../customHooks/useAsync'
import getPeopleById from '../../api/starwarsAPI/getPeopleById'
import FetchError from './FetchError'
import Loading from './Loading'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { HistoryContext } from '../../context/historyContext/HistoryContext'
const FullCharacterInfo = () => {
    const { setBarActive } = useContext(HistoryContext)
    setBarActive(true)
    const { id } = useParams()
    const { execute, status, value, error } = useAsync(getPeopleById, id, true)

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
    return (
        <Box style={swStyles.characterInfo.main}>
            <MenuItem sx={swStyles.characterInfo.subtitle}>
                <Typography sx={swStyles.primaryText}>
                    General Information
                </Typography>
            </MenuItem>
            <MenuItem sx={swStyles.characterInfo.details}>
                <Typography sx={swStyles.characterInfo.info}>
                    Eye Color
                </Typography>
                <Typography sx={swStyles.primaryText}>
                    {capitalizeFirstLetter(value.eye_color)}
                </Typography>
            </MenuItem>
            <Box sx={swStyles.divider}>
                <Divider sx={swStyles.dividerlength} />
            </Box>
            <MenuItem sx={swStyles.characterInfo.details}>
                <Typography sx={swStyles.characterInfo.info}>
                    Hair Color
                </Typography>
                <Typography sx={swStyles.primaryText}>
                    {capitalizeFirstLetter(value.hair_color)}
                </Typography>
            </MenuItem>
            <Box sx={swStyles.divider}>
                <Divider sx={swStyles.dividerlength} />
            </Box>
            <MenuItem sx={swStyles.characterInfo.details}>
                <Typography sx={swStyles.characterInfo.info}>
                    Skin Color
                </Typography>
                <Typography sx={swStyles.primaryText}>
                    {capitalizeFirstLetter(value.skin_color)}
                </Typography>
            </MenuItem>
            <Box sx={swStyles.divider}>
                <Divider sx={swStyles.dividerlength} />
            </Box>
            <MenuItem sx={swStyles.characterInfo.details}>
                <Typography sx={swStyles.characterInfo.info}>
                    Birth year
                </Typography>
                <Typography sx={swStyles.primaryText}>
                    {value.birth_year}
                </Typography>
            </MenuItem>
            <Box sx={swStyles.divider}>
                <Divider sx={swStyles.dividerlength} />
            </Box>

            <MenuItem sx={swStyles.characterInfo.subtitle}>
                <Typography sx={swStyles.primaryText}>Vehicles</Typography>
            </MenuItem>
            {value.vehicles.length == 0 ? (
                <MenuItem sx={swStyles.characterInfo.details}>
                    <Typography sx={swStyles.characterInfo.info}>
                        No vehicles
                    </Typography>
                </MenuItem>
            ) : (
                value.vehicles.map((vehicle) => (
                    <>
                        <MenuItem sx={swStyles.characterInfo.details}>
                            <Typography sx={swStyles.characterInfo.info}>
                                {vehicle}
                            </Typography>
                        </MenuItem>
                        <Box sx={swStyles.divider}>
                            <Divider sx={swStyles.dividerlength} />
                        </Box>
                    </>
                ))
            )}
        </Box>
    )
}

export default FullCharacterInfo
