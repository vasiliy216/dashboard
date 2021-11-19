import { PageHeader } from '../../../components/basic'
import { AddNewPostCoomon, Actions, Categories } from '../../../components/common'

import './style.scss'

const AddNewPost = () => {


    return (
        <>
            <PageHeader subtitle="BLOG POSTS" title="Add New Post" />
            <div className="row">
                <AddNewPostCoomon />
                <div className="add-new-post__setting card-p">
                    <Actions />
                    <Categories />
                </div>
            </div>
        </>
    )
}

export default AddNewPost