import './style.scss'

const PageHeader = props => {

    const {
        subtitle,
        title
    } = props;

    return (
        <div className="page-header card-p">
            <div className="page-header-title">
                <span className="page-subtitle">{ subtitle }</span>
                <h3 className="page-title">{ title }</h3>
            </div>
        </div>
    )
}

export default PageHeader