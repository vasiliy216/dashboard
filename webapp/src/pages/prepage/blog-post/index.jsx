import { PageHeader, BlogPostBasic, LoaderSnipperPage, NewEntries } from '../../../components/basic'
import { PopUpPostsUser } from '../../../components/common'
// import Blog from './bd.json'
import orderBy from 'lodash/orderBy'

import './style.scss'

const BlogPost = (props) => {

    const {
       items,
       isNewEntries,
       PostUpdate,
       PopUpWindow,
       itemsUser,
       PopUpRef
    } = props

    return (
        <>
            <PageHeader subtitle="COMPONENTS" title="Blog Posts" />
            { isNewEntries && <NewEntries onClick={PostUpdate} /> }
            <div className="row">
                <div></div>
                {
                    orderBy(items, ['updatedAt'], ['desc']).map((item, index) => {
                        return (
                            <BlogPostBasic PopUpWindow={PopUpWindow} {...item} key={index}/>
                        )
                    })
                }
            </div>
            {itemsUser.length > 0 && <PopUpPostsUser PopUpRef={PopUpRef} items={itemsUser} /> }
        </>
    )
}

export default BlogPost