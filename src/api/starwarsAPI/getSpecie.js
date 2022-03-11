import axios from 'axios'

const getSpecie = async (page = 'https://swapi.dev/api/species/1/') => {
    const { data } = await axios({
        url: page,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return data
}

export default getSpecie
