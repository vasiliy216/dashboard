import './style.scss'

const TopRefferalsItem = props => {
    
    const {
        name,
        value
    } = props;

    return (
        <li className="top-refferals-list-item"><span>{ name }</span><span>{ value }</span></li>
    )

}

export default TopRefferalsItem