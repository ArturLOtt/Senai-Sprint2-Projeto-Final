import Axios from "axios";

const apiConection = Axios.create( { baseURL: "http://localhost:5000/api/" } )

export default apiConection;