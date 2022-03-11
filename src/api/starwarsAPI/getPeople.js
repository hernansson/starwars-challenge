import axios from 'axios'
import getSpecie from './getSpecie'
import getDataURL from './getDataURL'
const getPeople = async (page) => {
    const { data } = await axios({
        url: `https://swapi.dev/api/people/?page=${page}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const characters = await Promise.all(
        data.results.map(async (char) => {
            const { name: specie } = await getSpecie(char.species[0])
            const { name: home } = await getDataURL(char.homeworld)
            return { ...char, home, specie }
        })
    )
    return { ...data, results: characters }
}

export default getPeople
