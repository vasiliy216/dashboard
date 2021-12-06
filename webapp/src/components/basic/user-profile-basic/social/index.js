import './style.scss'

const UserSocial = (props) => {

    const {
        social
    } = props

    return (
        <ul className="user-details__social">
            {
                Object.keys(social).map(key => {
                    if (social[key]) {
                        return (
                            <li key={social[key]}>
                                <a
                                    href={"https://" + key + ".com/" + social[key]}
                                    target="_blank"
                                >
                                    <i className={"fab fa-" + key}></i>
                                </a>
                            </li>
                        )
                    }
                })
            }
        </ul>
    )

}

export default UserSocial