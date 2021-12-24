import { UserProfileCommon, SendMessage, UserTasks, WeeklyPerformanceReport } from '../../../components/common'

import './style.scss'

const UserProfile = (props) => {

    const {
        user,
        Performance
    } = props

    return (
        <>
            <div className="row mt-24">
                <div className="user-profile-left card-p">
                    <UserProfileCommon {...user} />
                    <SendMessage />
                </div>
                <div className="user-profile-right card-p">
                    <UserTasks Performance={Performance} />
                    <WeeklyPerformanceReport />
                </div>
            </div>
        </>
    )
}

export default UserProfile