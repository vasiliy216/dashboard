import './style.scss'

const StatsPanelHeader = props => {


    return (
        <div className="stats-panel-header card-p-16">
            <h6>{props.children}</h6>
        </div>
    )
}

export default StatsPanelHeader