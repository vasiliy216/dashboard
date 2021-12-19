import classNames from 'classnames';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import './style.scss'

import { EmptyUserAvatarLink } from '../../basic'

const BlogPostBasic = props => {

    const {
        categories,
        schedule,
        image,
        user,
        status,
        visibility,
        title,
        text,
        PopUpWindow
    } = props;

    return (
        <div className="blog-post card-p quill">
            <div className={classNames({
                'card-mrg-all': true,
                'blog-overflow': true,
                'ql-snow': true,
                'blog-post-no_image': !image,
            })}>
                {image &&
                    <div className="blog-post__header"
                        style={{ backgroundImage: 'url(' + image + ')' }}>
                        <Link to="*" className="plog-post__category bg-dark">
                            {categories}
                        </Link>
                        <div className="blog-post__author">
                            <EmptyUserAvatarLink image={user.avatar} />
                        </div>
                    </div>
                }
                <div className="blog-post__body card-blg">
                    <h5>
                        <div
                            className='blog-post__body-title'
                            onClick={PopUpWindow.bind(this, user._id)}
                        >
                            { title }
                        </div>
                    </h5>
                    <p className="ql-editor" dangerouslySetInnerHTML={{ __html: text }}></p>
                    {image && <span>{format(new Date(schedule), 'dd MMMM yyyy')}</span>}
                </div>
                {!image &&
                    <div className="blog-post__footer">
                        <div className="blog-post__author">
                            <EmptyUserAvatarLink image={user.avatar} />
                            <div className="blog-post__author-name">
                                <span>{user.user_name}</span>
                                <small>{format(new Date(schedule), 'dd MMMM yyyy')}</small>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogPostBasic