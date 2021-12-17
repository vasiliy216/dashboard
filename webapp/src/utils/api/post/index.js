import { Axios } from "../../../core"

export default {
    create: postData => Axios.post("/post", postData),
    getAll: () => Axios.get("/post"),
    delete: query => Axios.delete('/post?query=' + query),
}