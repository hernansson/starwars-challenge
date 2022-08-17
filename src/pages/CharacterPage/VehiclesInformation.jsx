import React from 'react'
import { MenuItem, Typography, Box, Divider } from '@mui/material'
import { swStyles } from './swStyles'
const VehiclesInformation = ({ vehicles }) => {
    return (
        <>
            <MenuItem sx={swStyles.characterInfo.subtitle}>
                <Typography sx={swStyles.primaryText}>Vehicles</Typography>
            </MenuItem>
            {vehicles.length == 0 ? (
                <MenuItem sx={swStyles.characterInfo.details}>
                    <Typography sx={swStyles.characterInfo.info}>
                        No vehicles
                    </Typography>
                </MenuItem>
            ) : (
                vehicles.map((vehicle) => (
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
        </>
    )
}

export default VehiclesInformation
