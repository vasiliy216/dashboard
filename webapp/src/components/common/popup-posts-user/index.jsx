import { EmptyUserAvatarLink } from '../../basic'
import format from 'date-fns/format'
import './style.scss'

const PopUpPostsUser = (props) => {

    const {
        items,
        PopUpRef
    } = props

    console.log(items[0])

    return (
        <div className='popup-posts-user blog-post' ref={PopUpRef}>
            <div className='popup-posts-user__center'>
                <div className="popup-posts-user__arrow-left">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="popup-posts-user__body card-mrg-all quill">
                    <div className="popup-posts-user__body-avatar blog-post__author">
                        <EmptyUserAvatarLink image={items[0].user.avatar} />
                        <div className="blog-post__author-name">
                            <span>{items[0].user.user_name}</span>
                            <small>{format(new Date(items[0].schedule), 'dd MMMM yyyy')}</small>
                        </div>
                    </div>
                    <div className="popup-posts-user__body-item ql-snow">
                        {
                            items[0].image && (
                                <div className="popup-posts-user__body-img">
                                    <img src={items[0].image} alt="" />
                                </div>
                            )
                        }
                        <div className="popup-posts-user__body-img">
                            <img src="https://designrevision.com/demo/shards-dashboards/images/content-management/2.jpeg" alt="" />
                        </div>
                        <div className="popup-posts-user__body-title">
                            {items[0].title}
                        </div>
                        <div className="popup-posts-user__body-text">
                            <p className="ql-editor" dangerouslySetInnerHTML={{ __html: items[0].text }}></p>
                        </div>
                    </div>
                </div>
                <div className="popup-posts-user__arrow-right">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="popup-posts-user__close">
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )

}

export default PopUpPostsUser