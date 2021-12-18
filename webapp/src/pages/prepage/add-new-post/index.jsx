import { PageHeader } from '../../../components/basic'
import { AddNewPostCoomon, Actions, Categories } from '../../../components/common'

import './style.scss'

const AddNewPost = (props) => {

    const {
        data,
        ChangeData,
        SendData
    } = props

    return (
        <>
            <PageHeader subtitle="BLOG POSTS" title="Add New Post" />
            <div className="row">
                <AddNewPostCoomon
                    data={data}
                    ChangeData={ChangeData}
                />
                <div className="add-new-post__setting card-p">
                    <Actions
                        data={data}
                        ChangeData={ChangeData}
                        SendData={SendData}
                    />
                    <Categories
                        data={data}
                        ChangeData={ChangeData}
                    />
                </div>
            </div>
        </>
    )
}

export default AddNewPost