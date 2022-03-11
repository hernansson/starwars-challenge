import React from 'react'
import { swStyles } from './swStyles'
import { Box, Typography, IconButton } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
const FetchError = ({ handleReload }) => {
    return (
        <Box style={swStyles.error.main}>
            <Typography style={swStyles.error.primaryText}>
                Failed to Load Data
            </Typography>
            <IconButton>
                <RefreshIcon onClick={handleReload} sx={swStyles.error.icon} />
            </IconButton>
        </Box>
    )
}

export default FetchError
