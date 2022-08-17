import React from 'react'
import { Box, MenuItem, Typography, Divider } from '@mui/material'
import { swStyles } from './swStyles'
import GeneralRow from './GeneralRow'
const GeneralInformation = ({ eyeColor, hairColor, skinColor, birthYear }) => {
    const charData = [
        { title: 'Eye Color', value: eyeColor },
        { title: 'Hair Color', value: hairColor },
        { title: 'Skin Color', value: skinColor },
        { title: 'Birth year', value: birthYear },
    ]
    return (
        <>
            <MenuItem sx={swStyles.characterInfo.subtitle}>
                <Typography sx={swStyles.primaryText}>
                    General Information
                </Typography>
            </MenuItem>
            {charData.map((data) => {
                return (
                    <>
                        <GeneralRow title={data.title} value={data.value} />
                        <Box sx={swStyles.divider}>
                            <Divider sx={swStyles.dividerlength} />
                        </Box>
                    </>
                )
            })}
        </>
    )
}

export default GeneralInformation
