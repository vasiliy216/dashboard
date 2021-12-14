import { Axios } from "../../../core"

export default {
    login: postData => Axios.post("/account/login", postData),
    register: postData => Axios.post("/account/register", postData),
    getim: () => Axios.get('/user/im'),
    update: postData => Axios.put('/user/update', postData),
    getUsers: () => Axios.get('/user/all'),
}