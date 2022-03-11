import { useContext } from 'react'
import { navStyles } from './navStyles'
import { Typography, Box, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { HistoryContext } from '../../context/historyContext/HistoryContext'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const { barActive, barTitle, setBarTitle } = useContext(HistoryContext)
    const navigate = useNavigate()
    const handleClick = () => {
        setBarTitle('People of Star Wars')
        navigate('')
    }
    return (
        <Box style={navStyles.main}>
            <Box sx={{ width: '15%', ...navStyles.center }}>
                {barActive && (
                    <IconButton onClick={handleClick}>
                        <ArrowBackIcon sx={{ color: 'white' }} />
                    </IconButton>
                )}
            </Box>
            <Box sx={{ width: '70%', ...navStyles.center }}>
                <Typography style={navStyles.navText}>{barTitle}</Typography>
            </Box>
            <Box sx={{ width: '15%' }}></Box>
        </Box>
    )
}

export default Navbar
