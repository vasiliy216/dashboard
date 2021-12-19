import { Axios } from "../../../core"

export default {
    getAll: () => Axios.get("/post"),
    getPostsUser: UserId => Axios.get("/post/" + UserId),
    create: postData => Axios.post("/post", postData),
    delete: query => Axios.delete('/post?query=' + query),
}