import { Header, Menu, Body, Footer } from '../../components/section'
import './style.scss'

const Home = () => {

    return (
        <>
            <Menu />
            <div className="main-content">
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    )
}

export default Home