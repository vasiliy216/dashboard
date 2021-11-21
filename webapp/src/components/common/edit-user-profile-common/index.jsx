import { Buttons } from '../../basic'
import { General, Social, ChangePassword, Header } from '../../basic/edit-user-profile-basic'

import './style.scss'

const EditUserProfileCommon = () => {

    return (
        <div className="edit-user-profile card-p">
            <div className="card-mrg-all">
                <Header />
                <div className="edit-user-profile__body">
                    <div className="edit-user-profile__form">
                        <General />
                        <hr />
                        <Social />
                        <hr />
                        <ChangePassword />
                    </div>
                </div>
                <div className="edit-user-profile__footer">
                    <Buttons primary>Save Changes</Buttons>
                </div>
            </div>
        </div>
    )
}

export default EditUserProfileCommon