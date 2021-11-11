import { PageHeader } from '../../../components/basic'
import { Footer } from '../../../components/section'
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
            <StatisticsCommon />
            <StatsUsers />
            <StatsUsersByDevice />
            <NewDraft />
            <Discussions />
            <TopReferrals />
            <Footer />
        </>
    )
}

export default BlogDashboard