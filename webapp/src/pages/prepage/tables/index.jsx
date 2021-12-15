import { PageHeader, LoaderSnipperPage } from '../../../components/basic'
import { StatusUsers } from '../../../components/common'

import './style.scss'

const Tables = (props) => {

    const {
        users,
        isLoader
    } = props

    if (isLoader) {
        return (
            <LoaderSnipperPage />
        )
    } else {
        return (
            <>
                <PageHeader subtitle="OVERVIEW" title="Data Tables" />
                <div className="row">
                    <StatusUsers users={users}> Active Users </StatusUsers>
                </div>
                <div className="row">
                    <StatusUsers users={users} styleDark> Inactive Users </StatusUsers>
                </div>
            </>
        )
    }
}

export default Tables