import { Buttons } from '../../basic'
import { General, Social, ChangePassword, Header, PageAddress } from '../../basic/edit-user-profile-basic'

import './style.scss'

const EditUserProfileCommon = (props) => {

    const {
        data,
        imgAvatar,
        imgBackground,
        error,
        ChangeData,
        SaveChanges,
        ChangeFilesAvatar,
        ChangeFilesBackground
    } = props

    return (
        <div className="edit-user-profile card-p">
            <div className="card-mrg-all">
                <Header 
                    backgroundPhoto={data.background_photo}
                    imgBackground={imgBackground}
                    ChangeFilesBackground={ChangeFilesBackground}    
                />
                <div className="edit-user-profile__body">
                    <div className="edit-user-profile__form">
                        <General
                            ChangeData={ChangeData}
                            data={data}
                            ChangeFilesAvatar={ChangeFilesAvatar}
                            imgAvatar={imgAvatar}
                        />
                        <hr />
                        <Social ChangeData={ChangeData} data={data} />
                        <hr />
                        <PageAddress ChangeData={ChangeData} data={data} />
                        <hr />
                        <ChangePassword ChangeData={ChangeData} data={data} error={error} />
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