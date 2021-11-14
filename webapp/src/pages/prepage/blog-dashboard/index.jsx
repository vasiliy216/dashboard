import { PageHeader } from '../../../components/basic'
import {
    StatisticsCommon,
    StatsUsers,
    StatsUsersByDevice,
    NewDraft,
    Discussions,
    TopReferrals
} from '../../../components/common'

import './style.scss'

const BlogDashboard = () => {



    return (
        <>
            <PageHeader subtitle="DASHBOARD" title="Blog Overview" />
            <div className="row">
                <StatisticsCommon />
                <StatsUsers />
                <StatsUsersByDevice />
                <NewDraft />
                <Discussions />
                <TopReferrals />
            </div>
        </>
    )
}

export default BlogDashboard