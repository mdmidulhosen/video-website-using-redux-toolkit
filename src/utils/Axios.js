import axios from "axios";

const asiosInstance = axios.create({
    baseURL: "http://localhost:9000"
});
export default asiosInstance