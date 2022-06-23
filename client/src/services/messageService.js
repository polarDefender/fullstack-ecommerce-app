import axios from 'axios'

async function sendMessage(url, msgData) {
    const res = await axios.post(url, msgData)
    return res.data
}

const messageService = { sendMessage }

export default messageService