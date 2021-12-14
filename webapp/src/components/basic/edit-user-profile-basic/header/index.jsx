import { UserBackgroundPhoto } from '../../'

import './style.scss'

const Header = (props) => {

    const {
        ChangeData,
        backgroundPhoto,
        imgBackground,
        ChangeFilesBackground
    } = props

    return (
        <div className="edit-user-profile__header">
            <div className="edit-user-details__img">
                <UserBackgroundPhoto image={imgBackground || backgroundPhoto}/>
                <label className="edit-user-details__change-background">
                    <i className="fas fa-camera"></i> Change Background Photo 
                    <input
                        onChange={(info) => ChangeFilesBackground(info.target.files)}
                        type="file" />
                </label>
            </div>
        </div>
    )
}

export default Header