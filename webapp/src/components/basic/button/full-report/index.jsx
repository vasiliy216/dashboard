import './style.scss'

const FullReport = props => {


    return (
        <div className="device-footer-href">
            <a href="#" className="device-footer-button">{props.children}</a>
        </div>
    )
}

export default FullReport