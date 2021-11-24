import {CanvasStatisticsComments} from '../canvas/statistics'
import './style.scss'

const StatisticsBasic = props => {

    const {
        title,
        values,
        percentage,
        borderColor,
        backgroundColor
    } = props;

    return (
        <div className="stats-small card-p">
            <div className="stats-small card-mrg-all">
                <div className="container">
                    <div className="card-body">
                        <span className="stats-title">{title}</span>
                        <h6 className="stats-value">{values}</h6>
                        <span className="stats-percentage increase">{percentage}</span>
                    </div>
                    <CanvasStatisticsComments borderColor={borderColor} backgroundColor={backgroundColor}/>
                </div>
            </div>
        </div>
    )
}

export default StatisticsBasic