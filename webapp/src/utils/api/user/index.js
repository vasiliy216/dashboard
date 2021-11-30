import { Axios } from "../../../core"

export default {
    login: postData => Axios.post("/account/login", postData),
    register: postData => Axios.post("/account/register", postData),
    getim: () => Axios.get('/user/im')
}