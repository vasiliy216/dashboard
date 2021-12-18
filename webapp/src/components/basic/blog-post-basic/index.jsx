import classNames from 'classnames';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import '../../../../node_modules/react-quill/dist/quill.snow.css'
import './style.scss'

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
                        style={{ backgroundImage: 'url('+ image +')' }}>
                        <Link to="*" className="plog-post__category bg-dark">
                            { categories }
                        </Link>
                        <div className="blog-post__author">
                            <Link to="*"
                                className="blog-post__author-avatar"
                                style={{ backgroundImage: 'url('+ user.avatar +')'}}
                            ></Link>
                        </div>
                    </div>
                }
                <div className="blog-post__body card-blg">
                    <h5>
                        <Link to="*">{ title }</Link>
                    </h5>
                    <p className="ql-editor" dangerouslySetInnerHTML={{__html: text}}></p>
                    {image && <span>{ format(new Date(schedule), 'dd MMMM yyyy') }</span>}
                </div>
                {!image &&
                    <div className="blog-post__footer">
                        <div className="blog-post__author">
                            <Link to="*"
                                className="blog-post__author-avatar"
                                style={{ backgroundImage: 'url('+ user.avatar +')'}}
                            ></Link>
                            <div className="blog-post__author-name">
                                <span>{ user.user_name }</span>
                                <small>{ format(new Date(schedule), 'dd MMMM yyyy') }</small>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogPostBasic