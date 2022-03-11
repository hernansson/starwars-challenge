import axios from 'axios'
import getSpecie from './getSpecie'
import getDataURL from './getDataURL'
const getPeopleById = async (id) => {
    const { data } = await axios({
        url: `https://swapi.dev/api/people/${id}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const { name: specie } = await getSpecie(data.species[0])
    const { name: home } = await getDataURL(data.homeworld)
    const vehicles = await Promise.all(
        data.starships.map(async (urlStarship) => {
            const { name: vehicle } = await getDataURL(urlStarship)
            return vehicle
        })
    )

    return { ...data, specie, home, vehicles }
}

export default getPeopleById
