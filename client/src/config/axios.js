import axios from 'axios'

const axiosInstance = axios.create({
    base_URL:`http://localhost:2000/api`
})

export default axiosInstance;