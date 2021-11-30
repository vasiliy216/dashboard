import { Buttons } from '../../basic'
import { General, Social, ChangePassword, Header } from '../../basic/edit-user-profile-basic'

import './style.scss'

const EditUserProfileCommon = (props) => {

    const {
        data,
        ChangeData,
        SaveChanges
    } = props

    return (
        <div className="edit-user-profile card-p">
            <div className="card-mrg-all">
                <Header ChangeData={ChangeData} backgroundPhoto={data.background_photo}/>
                <div className="edit-user-profile__body">
                    <div className="edit-user-profile__form">
                        <General ChangeData={ChangeData} data={data}/>
                        <hr />
                        <Social ChangeData={ChangeData} data={data}/>
                        <hr />
                        <ChangePassword ChangeData={ChangeData} data={data}/>
                    </div>
                </div>
                <div className="edit-user-profile__footer">
                    <Buttons onClick={() => SaveChanges()} primary>Save Changes</Buttons>
                </div>
            </div>
        </div>
    )
}

export default EditUserProfileCommon