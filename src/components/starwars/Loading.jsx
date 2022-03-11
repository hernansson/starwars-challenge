import React from 'react'
import { swStyles } from './swStyles'
import { Typography, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
const Loading = () => {
    return (
        <Box style={swStyles.loading.main}>
            <CircularProgress size={24} style={swStyles.loading.icon} />
            <Typography style={swStyles.loading.primaryText}>
                Loading
            </Typography>
        </Box>
    )
}

export default Loading
