import { Menu, Body, Footer } from '../../components/section'
import { LoaderSnipper } from '../../components/basic'
import { Header } from '../../containers/section'
import { connect } from 'react-redux';

import './style.scss'

const Home = (props) => {

    const {
        user
    } = props

    if (user) {
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
    } else {
        return <LoaderSnipper />
    }
}

export default connect(({ user }) => ({ user: user.data }))(Home)