import { Menu, Body, Footer } from '../../components/section'
import { Header } from '../../containers/section'
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