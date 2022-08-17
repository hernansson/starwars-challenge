import React from 'react'
import { MenuItem, Typography } from '@mui/material'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { swStyles } from './swStyles'
const GeneralRow = ({ title, value }) => {
    return (
        <MenuItem sx={swStyles.characterInfo.details}>
            <Typography sx={swStyles.characterInfo.info}>{title}</Typography>
            <Typography sx={swStyles.primaryText}>
                {capitalizeFirstLetter(value)}
            </Typography>
        </MenuItem>
    )
}

export default GeneralRow
