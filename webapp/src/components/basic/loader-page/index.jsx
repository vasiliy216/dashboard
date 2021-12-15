import Loader from 'react-loader-spinner'
import './style.scss'

const LoaderSnipper = () => {

    return (
        <div className="loader-page">
            <Loader
                type='TailSpin'
                color="#007bff"
            />
        </div>
    )
}

export default LoaderSnipper