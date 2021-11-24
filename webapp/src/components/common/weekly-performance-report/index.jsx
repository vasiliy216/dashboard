import { StatsPanelHeader } from '../../basic'
import { CanvasWeeklyPerformanceReport } from '../../basic/canvas'

import './style.scss'

const WeeklyPerformanceReport = () => {
    

    return (
        <div className="weekly-performance-report">
            <div className="card-mrg-all">
                <StatsPanelHeader>Weekly Performance Report</StatsPanelHeader>
                <div className="weekly-performance-report__body">
                    <CanvasWeeklyPerformanceReport />
                </div>
            </div>
        </div>
    )
}

export default WeeklyPerformanceReport