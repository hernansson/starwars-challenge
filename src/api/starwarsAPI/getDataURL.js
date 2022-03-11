import axios from 'axios'

const getDataURL = async (page) => {
    const { data } = await axios({
        url: page,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return data
}

export default getDataURL
