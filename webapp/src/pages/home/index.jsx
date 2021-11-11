import { Header, Menu, Body } from '../../components/section'
import './style.scss'

const Home = () => {

    return (
        <>
            <Menu />
            <div className="main-content">
                <Header />
                <Body />
            </div>
        </>
    )
}

export default Home