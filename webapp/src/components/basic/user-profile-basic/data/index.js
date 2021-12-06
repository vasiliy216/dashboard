import './style.scss'

const UserData = (props) => {

    const {
        email,
        location,
        phone_number,
    } = props

    if (
        email ||
        location ||
        phone_number
    ) {
        return (
            <div className="user-details__data">
                <div className="user-details__data-wrapper">
                    {
                        email && (
                            <div className="user-text__data">
                                <span>Email</span>
                                <span>{email}</span>
                            </div>
                        )
                    }
                    {
                        location && (
                            <div className="user-text__data">
                                <span>Location</span>
                                <span>{location}</span>
                            </div>
                        )
                    }
                </div>
                <div className="user-details__data-wrapper">
                    {
                        phone_number && (
                            <div className="user-text__data">
                                <span>Phone</span>
                                <span>{phone_number}</span>
                            </div>
                        )
                    }
                    {/* <div className="user-text__data">
                                    <span>Account Number</span>
                                    <span>123456789</span>
                                </div> */}
                </div>
            </div>
        )
    } else {
        return <></>
    }

}

export default UserData