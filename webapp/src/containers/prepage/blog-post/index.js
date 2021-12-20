import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../redux/actions'
import { postApi } from '../../../utils/api'
import { OpenNotification } from '../../../utils/helpers'
import { Socket } from '../../../core'

import { BlogPost as BlogPostBase } from '../../../pages/prepage'

const BlogPost = (props) => {

    const {
        fetchPosts,
        items
    } = props

    // const [isLoader, setIsLoader] = useState(true)
    const [isNewEntries, setIsNewEntries] = useState(false)
    const [itemsUser, setItemsUser] = useState([])

    const PopUpRef = useRef();

    const onNewPosts = () => {
        setIsNewEntries(prevState => (!prevState))
    }

    const PostUpdate = () => {
        fetchPosts();

        onNewPosts();
    }

    const ClossPopUpWindow = e => {
        if (!e.path.includes(PopUpRef.current)) {
            setItemsUser([])
        }
    }

    const PopUpWindow = data => {

        const {
            post_id,
            user_id
        } = data

        postApi
            .getPostsUser(post_id, user_id)
            .then(newData => {
                const { data } = newData;
                setItemsUser(data)
            })
            .catch()
    }

    useEffect(() => {

        fetchPosts()
            .then(data => {
                // setIsLoader(prevState => (!prevState))
            })
            .catch()

        Socket.on("SERVER:NEW_POSTS", onNewPosts)

        document.body.addEventListener('click', ClossPopUpWindow);

        return () => {
            Socket.removeListener("SERVER:NEW_POSTS")

            document.body.removeEventListener('click', ClossPopUpWindow);
        }

    }, [])

    return (
        <BlogPostBase
            items={items}
            isNewEntries={isNewEntries}
            PostUpdate={PostUpdate}
            PopUpWindow={PopUpWindow}
            itemsUser={itemsUser}
            PopUpRef={PopUpRef}
        />
    )
}

export default connect(({ post }) => ({
    items: post.items
}), Post)(BlogPost)