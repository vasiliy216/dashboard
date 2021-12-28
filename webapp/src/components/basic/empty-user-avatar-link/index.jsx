import { Link } from 'react-router-dom'
import { UserAvatar } from '../'

const EmptyUserAvatarLink = (props) => {

    const {
        image,
        userId
    } = props

    if (image) {
        return (
            <Link to={"/" + userId}
                className="blog-post__author-avatar"
                style={{ backgroundImage: 'url(' + image + ')' }}
            ></Link>
        )
    } else {
        return (
            <Link to={"/" + userId}>
                <UserAvatar />
            </Link>
        )
    }

}

export default EmptyUserAvatarLink