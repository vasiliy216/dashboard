import { Axios } from "../../../core"

export default {
    getAll: () => Axios.get("/post"),
    getPostsUser: (post_id, user_id) => Axios.get("/post/user?post_id=" + post_id + "&user_id=" + user_id),
    create: postData => Axios.post("/post", postData),
    delete: query => Axios.delete('/post?query=' + query),
}