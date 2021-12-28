import { UserProfileCommon, SendMessage, UserTasks, WeeklyPerformanceReport } from '../../../components/common'
import { LoaderSnipperPage } from '../../../components/basic'

import './style.scss'

const UserProfile = (props) => {

    const {
        item,
        user,
        Performance,
        isLoader
    } = props

    if(isLoader) {
        return (
            <LoaderSnipperPage />
        )
    } else {
        return (
            <>
                <div className="row mt-24">
                    <div className="user-profile-left card-p">
                        <UserProfileCommon {...item} />
                        {user._id !== item._id && <SendMessage />}
                    </div>
                    <div className="user-profile-right card-p">
                        <UserTasks Performance={Performance} />
                        <WeeklyPerformanceReport />
                    </div>
                </div>
            </>
        )
    }
}

export default UserProfile