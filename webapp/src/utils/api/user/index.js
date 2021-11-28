import { Axios } from "../../../core"

export default {
    login: postData => Axios.post("/auth/login", postData),
    register: postData => Axios.post("/auth/register", postData),
    getim: () => Axios.get('/user/im')
}