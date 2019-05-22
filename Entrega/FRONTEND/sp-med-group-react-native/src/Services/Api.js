import Axios from 'axios'


const api = Axios.create({
    // baseURL: 'https://spmedgroup.azurewebsites.net/api'
    baseURL: 'https://spmedgroups2.azurewebsites.net/api'
})

export default api