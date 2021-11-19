import { PageHeader } from '../../../components/basic'
import { StatusUsers } from '../../../components/common'

import './style.scss'

const Tables = () => {
    return (
        <>
            <PageHeader subtitle="OVERVIEW" title="Data Tables" />
            <div className="row">
                <StatusUsers>Active Users</StatusUsers>
            </div>
            <div className="row">
                <StatusUsers styleDark>Inactive Users</StatusUsers>
            </div>
        </>
    )
}

export default Tables