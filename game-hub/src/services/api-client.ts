import axios from "axios";

export default axios.create({ 
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cca21f5b91a94f2d86f3daa2fd4ae011"
    }
})