import './style.scss'

const ProgressBar = props => {


    return (
        <div className="user-tasks-footer__progress">
            <div className="progress-wrapper">
                <span className="progress-label">{props.children}</span>
                <div className="progress-sm">
                    <div className="progress-bar" style={{width: `${props.width}`}}>
                        <span className="progress-value">
                            {props.width}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar