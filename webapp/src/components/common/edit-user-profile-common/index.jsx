import { Input } from 'antd'
import { Buttons } from '../../basic'

import './style.scss'

const EditUserProfileCommon = () => {


    return (
        <div className="edit-user-profile card-p">
            <div className="card-mrg-all">
                <div className="edit-user-profile__header">
                    <div className="edit-user-details__img">
                        <img src="https://designrevision.com/demo/shards-dashboards/images/user-profile/up-user-details-background.jpg" alt="" />
                        <label className="edit-user-details__change-background">
                            <i className="fas fa-camera"></i> Change Background Photo <input type="file" />
                        </label>
                    </div>
                </div>
                <div className="edit-user-profile__body">
                    <div> {/* Form */}
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
                                        <Input id="firstName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Input id="lastName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userLocation">Location</label>
                                        <Input id="userLocation" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <Input id="phoneNumber" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailAddress">Email</label>
                                        <Input id="emailAddress" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="displayEmail">Display Email Publicly</label>
                                        <Input id="displayEmail" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-general-right">
                                <label htmlFor="userProfilePicture">Profile Picture</label>
                                <div className="edit-user-details__avatar">
                                    <img src="https://designrevision.com/demo/shards-dashboards/images/avatars/0.jpg" alt="" />
                                    <label htmlFor="" className="edit-user-details__avatar__change">
                                        <i className="fas fa-camera"></i><input id="userProfilePicture" type="file" />
                                    </label>
                                </div>
                                <Buttons white small><i className="fas fa-cloud-upload-alt"></i> Upload Image</Buttons>
                            </div>
                        </div>
                        <div className="form-row mx-24">
                            <div className="form-equally"></div>
                            <div className="form-equally"></div>
                        </div>
                        <hr />
                        <div className="form-row mx-24">
                            <div className="form-row-title">
                                <h6>Social</h6>
                                <p className="text-muted">Setup your social profiles info.</p>
                            </div>
                        </div>
                        <div className="form-row mx-24"></div>
                        <div className="form-row mx-24"></div>
                        <hr />
                        <div className="form-row mx-24">
                            <div className="form-row-title">
                                <h6>Change Password</h6>
                                <p className="text-muted">Change your current password.</p>
                            </div>
                        </div>
                        <div className="form-row mx-24"></div>
                    </div>
                </div>
                <div className="edit-user-profile__footer"></div>
            </div>
        </div>
    )
}

export default EditUserProfileCommon