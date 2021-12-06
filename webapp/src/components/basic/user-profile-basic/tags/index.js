import './style.scss'

const UserTags = (props) => {

    const {
        tags
    } = props

    return (
        <div className="user-details__tags">
            {
                tags.map((item, index) => {
                    return (<span key={index} className="user-tag text-white">{item}</span>)
                })
            }
        </div>
    )

}

export default UserTags