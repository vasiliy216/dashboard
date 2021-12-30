import { Link } from 'react-router-dom'
import { UserAvatar } from '../'

const EmptyUserAvatarLink = (props) => {

    const {
        image,
        userLink
    } = props

    if (image) {
        return (
            <Link to={"/" + userLink}
                className="blog-post__author-avatar"
                style={{ backgroundImage: 'url(' + image + ')' }}
            ></Link>
        )
    } else {
        return (
            <Link to={"/" + userLink}>
                <UserAvatar />
            </Link>
        )
    }

}

export default EmptyUserAvatarLink