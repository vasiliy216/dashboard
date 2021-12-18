import { postApi } from '../../utils/api'
import { OpenNotification } from '../../utils/helpers'

const actions = {
    setPosts: items => ({
        type: "POSTS:SET_ITEMS",
        payload: items
    }),
    fetchPosts: () => dispatch => {
        return postApi
            .getAll()
            .then(({ data }) => {
                dispatch(actions.setPosts(data))

                return data
            })
            .catch(err => {

                OpenNotification({
                    type: err.status,
                    text: err.message
                })

                return new Error(err);
            })
    }
}

export default actions