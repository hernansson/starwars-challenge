import { useContext } from 'react'
import { HistoryContext } from '../../context/historyContext/HistoryContext'
import { ReactComponent as Arrow } from '../../assets/Vector.svg'
import Divider from '@mui/material/Divider'
import { swStyles } from '../../pages/CharacterPage/swStyles'
import { MenuItem, Typography, ListItemIcon, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getId } from '../../utils/getId'

const CustomMenuItem = ({ data }) => {
    const navigate = useNavigate()
    const id = getId(data.url)
    const { setBarTitle } = useContext(HistoryContext)
    const handleClick = () => {
        navigate(`/character/${id}`)
        setBarTitle(data.name)
    }

    return (
        <>
            <MenuItem onClick={handleClick} sx={swStyles.menuItem}>
                <Box sx={swStyles.main}>
                    <Typography sx={swStyles.primaryText}>
                        {data.name}
                    </Typography>
                    <Typography
                        data-testid="test-specie-home"
                        noWrap
                        sx={swStyles.secondarytext}
                    >
                        {`${data.specie} from ${data.home}`}
                    </Typography>
                </Box>
                <ListItemIcon
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Arrow />
                </ListItemIcon>
            </MenuItem>
            <Box sx={swStyles.divider}>
                <Divider sx={swStyles.dividerlength} />
            </Box>
        </>
    )
}

export default CustomMenuItem
