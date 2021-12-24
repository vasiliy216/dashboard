import { ProgressBar } from '../../basic'

import './style.scss'

const UserTasks = (props) => {

    const {
        Performance
    } = props

    return (
        <div className="user-tasks">
            <div className="card-mrg-all">
                <div className="user-tasks-body">
                    <div className="row">
                        <div className="user-tasks-wrapper">
                            <h4>1128</h4>
                            <span className="text-white">Tasks</span>
                        </div>
                        <div className="user-tasks-wrapper">
                            <h4>72.4%</h4>
                            <span className="text-white">COMPLETED</span>
                        </div>
                        <div className="user-tasks-wrapper">
                            <h4>4</h4>
                            <span className="text-white">PROJECTS</span>
                        </div>
                        <div className="user-tasks-wrapper">
                            <h4>3</h4>
                            <span className="text-white">TEAMS</span>
                        </div>
                    </div>
                </div>
                <div className="user-tasks-footer">
                    <div className="row">
                        <ProgressBar width='80%'>Workload</ProgressBar>
                        <ProgressBar width={Performance + '%'}>Performance</ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTasks