import axios from 'axios'

async function allCategories(url) {
    const res = await axios.get(url)
    return res.data
}

const categoryService = { allCategories }

export default categoryService