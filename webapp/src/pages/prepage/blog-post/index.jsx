import { PageHeader, BlogPostBasic, LoaderSnipperPage } from '../../../components/basic'
// import Blog from './bd.json'
import orderBy from 'lodash/orderBy'

import './style.scss'

const BlogPost = (props) => {

    const {
       items 
    } = props

    

    return (
        <>
            <PageHeader subtitle="COMPONENTS" title="Blog Posts" />
            <div className="row">
                <div></div>
                {
                    orderBy(items, ['updatedAt'], ['desc']).map((item, index) => {
                        return (
                            <BlogPostBasic {...item} key={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BlogPost