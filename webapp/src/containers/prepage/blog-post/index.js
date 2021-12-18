import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../redux/actions'
import { postApi } from '../../../utils/api'
import { OpenNotification } from '../../../utils/helpers'

import { BlogPost as BlogPostBase } from '../../../pages/prepage'

const BlogPost = (props) => {

    const {
        fetchPosts,
        items
    } = props

    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {

        fetchPosts()
            .then(data => {
                setIsLoader(prevState => (!prevState))
            })
            .catch()

    }, [])

    return (
        <BlogPostBase
            items={items}
        />
    )
}

export default connect(({ post }) => ({
    items: post.items
}), Post)(BlogPost)