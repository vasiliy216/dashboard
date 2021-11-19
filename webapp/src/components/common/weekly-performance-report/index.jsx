import { StatsPanelHeader } from '../../basic'

import './style.scss'

const WeeklyPerformanceReport = () => {
    

    return (
        <div className="weekly-performance-report">
            <div className="card-mrg-all">
                <StatsPanelHeader>Weekly Performance Report</StatsPanelHeader>
                <div className="weekly-performance-report__body">
                    <canvas>
                        
                    </canvas>
                </div>
            </div>
        </div>
    )
}

export default WeeklyPerformanceReport