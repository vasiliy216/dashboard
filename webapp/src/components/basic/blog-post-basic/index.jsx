import classNames from 'classnames';
import { Link } from 'react-router-dom'
import './style.scss'

const BlogPostBasic = props => {

    const {
        category,
        time,
        image,
        authorAvatar,
        authorName,
        title,
        text
    } = props;

    return (
        <div className="blog-post card-p">
            <div className={classNames({
                'card-mrg-all': true,
                'blog-overflow': true,
                'blog-post-no_image': !image,
            })}>
                {image &&
                    <div className="blog-post__header"
                        style={{ backgroundImage: 'url('+ image +')' }}>
                        <Link to="*" className="plog-post__category bg-dark">
                            { category }
                        </Link>
                        <div className="blog-post__author">
                            <Link to="*"
                                className="blog-post__author-avatar"
                                style={{ backgroundImage: 'url('+ authorAvatar +')'}}
                            ></Link>
                        </div>
                    </div>
                }
                <div className="blog-post__body card-blg">
                    <h5>
                        <Link to="*">{ title }</Link>
                    </h5>
                    <p>{ text }</p>
                    {image && <span>{ time }</span>}
                </div>
                {!image &&
                    <div className="blog-post__footer">
                        <div className="blog-post__author">
                            <Link to="*"
                                className="blog-post__author-avatar"
                                style={{ backgroundImage: 'url('+ authorAvatar +')'}}
                            ></Link>
                            <div className="blog-post__author-name">
                                <span>{ authorName }</span>
                                <small>{ time }</small>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogPostBasic