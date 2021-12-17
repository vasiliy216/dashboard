import { postApi } from '../../utils/api'
import { OpenNotification } from '../../utils/helpers'

const actions = {
    setPosts: items => ({
        type: "POSTS:SET_ITEMS",
        payload: items
    }),
    fetchPosts: () => dispatch => {
        postApi.getAll().then(({ data }) => {
            dispatch(actions.setPosts(data))
        })
    } 
}

export default actions