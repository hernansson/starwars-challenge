import GeneralInformation from './GeneralInformation'
import { Box } from '@mui/material'
import { swStyles } from './swStyles'
import VehiclesInformation from './VehiclesInformation'
const FullCharacterInfo = ({ value }) => {
    return (
        <Box style={swStyles.characterInfo.main}>
            <GeneralInformation
                eyeColor={value.eye_color}
                hairColor={value.hair_color}
                skinColor={value.skin_color}
                birthYear={value.birth_year}
            />
            <VehiclesInformation vehicles={value.vehicles} />
        </Box>
    )
}

export default FullCharacterInfo
