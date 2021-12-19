import { Buttons } from '../'
import './style.scss'

const NewEntries = (props) => {
    
    const {
        onClick
    } = props

    return (
        <div className="entries">
            <Buttons primary onClick={onClick} ><i className="fas fa-arrow-up"></i> New Entries</Buttons> 
        </div>
    )
}

export default NewEntries