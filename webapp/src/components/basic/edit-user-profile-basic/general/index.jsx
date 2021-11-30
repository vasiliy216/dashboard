import { Input, Select } from 'antd'
import { Buttons, UserAvatar } from '../../'
import './style.scss'

const General = (props) => {

    const {
        data,
        ChangeData,
        userName,
        ChangeUserName
    } = props

    const { TextArea } = Input;
    const { Option } = Select;

    return (
        <>
            <div className="form-row mx-24">
                <div className="form-row-title">
                    <h6>General</h6>
                    <p className="text-muted">Setup your general profile details.</p>
                </div>
            </div>
            <div className="form-row mx-24">
                <div className="form-general-left">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Input
                                id="firstName"
                                className="form-control"
                                value={"asd"}
                                onChange={e => ChangeUserName({...userName, first_name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Input
                                id="lastName"
                                className="form-control"
                                value={userName.last_name}
                                onChange={e => ChangeUserName({...userName, last_name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userLocation">Location</label>
                            <Input
                                id="userLocation"
                                className="form-control"
                                prefix={<i className="fas fa-map-marker-alt"></i>}
                                value={data.location}
                                onChange={e => ChangeData({ ...data, location: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Input
                                id="phoneNumber"
                                className="form-control"
                                prefix={<i className="fas fa-phone-alt"></i>}
                                value={data.phone_number}
                                onChange={e => ChangeData({ ...data, phone_number: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email</label>
                            <Input
                                id="emailAddress"
                                className="form-control"
                                prefix={<i className="fas fa-envelope"></i>}
                                value={data.email}
                                onChange={e => ChangeData({ ...data, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="displayEmail">Display Email Publicly</label>
                            <Input
                                id="displayEmail"
                                className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-general-right">
                    <label htmlFor="userProfilePicture">Profile Picture</label>
                    <div className="edit-user-details__avatar">
                        <UserAvatar userAvatar={null} />
                        <label htmlFor="userProfilePicture" className="edit-user-details__avatar__change">
                            <i className="fas fa-camera"></i>
                            <input
                                id="userProfilePicture"
                                type="file" />
                        </label>
                    </div>
                    <Buttons white small><i className="fas fa-cloud-upload-alt"></i> Upload Image</Buttons>
                </div>
            </div>
            <div className="form-row mx-24">
                <div className="form-equally">
                    <div className="form-group">
                        <label htmlFor="userBio">Bio</label>
                        <TextArea
                            id="userBio"
                            className="form-control"
                            value={data.bio}
                            onChange={(e) => ChangeData({...data, bio: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-equally">
                    <div className="form-group">
                        <label htmlFor="">Tags</label>
                        <Select
                            mode="tags"
                            className="form-group-tags form-control"
                            onChange={(e) => ChangeData({...data, tags: e})}
                            value={data.tags || []}
                            >
                            <Option key="0">React.JS</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default General