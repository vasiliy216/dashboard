// import { PageHeader } from '../../../components/basic'
// import { Footer } from '../../../components/section'
import { UserProfileCommon, SendMessage, UserTasks, WeeklyPerformanceReport } from '../../../components/common'

import './style.scss'

const UserProfile = () => {
    return (
        <>
            {/* <PageHeader subtitle="OVERVIEW" title="User Profile"/> */}
            <div className="row mt-24">
                <div className="user-profile-left card-p">
                    <UserProfileCommon />
                    <SendMessage />
                </div>
                <div className="user-profile-right card-p">
                    <UserTasks />
                    <WeeklyPerformanceReport />
                </div>
            </div>
        </>
    )
}

export default UserProfile