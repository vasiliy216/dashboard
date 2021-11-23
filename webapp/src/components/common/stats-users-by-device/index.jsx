import { StatsPanelHeader, SelectBasic, FullReport } from '../../basic'
import { CanvasUsersByDevice } from '../../basic/canvas'

import './style.scss'

const StatsUsersByDevice = () => {

    return (
        <div className="stats-users-by-device card-p">
            <div className="card-mrg-all h-100">
                <StatsPanelHeader>Users By Device</StatsPanelHeader>
                <div className="stats-device-body">
                    <CanvasUsersByDevice />
                </div>
                <div className="stats-device-footer card-p-16 card-footer">
                    <SelectBasic />
                    <FullReport>Full report →</FullReport>
                </div>
            </div>
        </div>
    )
}

export default StatsUsersByDevice