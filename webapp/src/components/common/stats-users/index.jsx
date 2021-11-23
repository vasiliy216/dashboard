import { DatePicker } from 'antd';
import { StatsPanelHeader } from '../../basic';
import { CanvasUsers } from '../../basic/canvas'

import './style.scss'

const StatsUsers = () => {


    return (
        <div className="stats-users card-p">
            <div className="card-mrg-all h-100">
                <StatsPanelHeader>Users</StatsPanelHeader>
                <div className="stats-users-body">
                    <div className="stats-body-top">
                        <div className="stats-date">
                            <DatePicker
                                placeholder="Start Date"
                                suffixIcon={false}
                                className="stats-date-input"
                            />
                            <DatePicker
                                placeholder="End Date"
                                suffixIcon={false}
                                className="stats-date-input"
                            />
                            <span className="stats-date-icon">
                                <i className="far fa-calendar-alt"></i>
                            </span>
                        </div>
                        <div className="stats-full-report">
                            <button className="full-report-button">View Full Report →</button>
                        </div>
                    </div>
                    <CanvasUsers />
                </div>
            </div>
        </div>
    )
}

export default StatsUsers