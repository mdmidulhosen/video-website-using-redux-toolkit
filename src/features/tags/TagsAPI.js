import axios from "../../utils/Axios"
export const getTags = async () => {
    const res = await axios.get('/tags')
    return res.data
}