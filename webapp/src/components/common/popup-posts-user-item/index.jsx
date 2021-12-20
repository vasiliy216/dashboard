import { EmptyUserAvatarLink } from '../../basic'
import format from 'date-fns/format'
import './style.scss'

const PopUpPostsUserItem = (props) => {

    const {
        item,
        PopUpRef,
        NawArrowLeft,
        NawArrowRight,
        arrowTransparent
    } = props

    return (
        <div className='popup-posts-user blog-post'>
            <div className='popup-posts-user__center'>
                <div className='popup-posts-user__center-ref' ref={PopUpRef}>
                    {
                        !arrowTransparent.arrowLeft && (
                            <div className="popup-posts-user__arrow-left" onClick={NawArrowLeft}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                        )
                    }
                    <div className="popup-posts-user__body card-mrg-all quill">
                        <div className="popup-posts-user__body-avatar blog-post__author">
                            <EmptyUserAvatarLink image={item.user.avatar} />
                            <div className="blog-post__author-name">
                                <span>{item.user.user_name}</span>
                                <small>{format(new Date(item.schedule), 'dd MMMM yyyy')}</small>
                            </div>
                        </div>
                        <div className="popup-posts-user__body-item ql-snow">
                            {
                                item.image && (
                                    <div className="popup-posts-user__body-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                )
                            }
                            <div className="popup-posts-user__body-title">
                                {item.title}
                            </div>
                            <div className="popup-posts-user__body-text">
                                <p className="ql-editor" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                            </div>
                        </div>
                    </div>
                    {
                        !arrowTransparent.arrowRight && (
                            <div className="popup-posts-user__arrow-right" onClick={NawArrowRight}>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        )
                    }
                </div>
                <div className="popup-posts-user__close">
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )

}

export default PopUpPostsUserItem