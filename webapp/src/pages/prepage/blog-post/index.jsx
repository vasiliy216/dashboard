import { PageHeader, BlogPostBasic } from '../../../components/basic'
import Blog from './bd.json'

import './style.scss'

const BlogPost = () => {

    return (
        <>
            <PageHeader subtitle="COMPONENTS" title="Blog Posts" />
            <div className="row">
                <div></div>
                {
                    Blog.map((item, index) => {
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